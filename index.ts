import { Json2Ts } from 'json2ts/src/json2ts';
import Protocol, { states } from 'minecraft-protocol';
import { Logger } from 'tslog';
import path from 'path';
import fs from 'fs';

// Client Settings
let USERNAME = "PacketUser";
let VERSION = "1.18.2";

// Target Server
let SERVER = "localhost";
let PORT = 25565

// Proxy Server
let PROXY_ENABLE = false;
let PROXY_PORT = 2566

// Some Configurations
let ignoredPackets = [
    "unlock_recipes",
    "update_time",
    "map_chunk",
    "rel_entity_move",
    "entity_move_look",
    "entity_head_rotation",
    "entity_velocity",
];
let VERSION_FOLDER = path.join(__dirname, VERSION);
let TYPES_FOLDER = path.join(VERSION_FOLDER, "@types");

let NormalizePacketName = (value: string) => value.split("_").map(e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join("");
let Stringify = (data: any) => JSON.stringify(data, (_, value) => (typeof (value) === "bigint") ? value.toString() : value, 4);
let logger = new Logger({ displayFilePath: "hidden", displayFunctionName: false, name: "Minecraft Packets" });
let json2ts = new Json2Ts();

// Create version folder if is not exist
if (!fs.existsSync(VERSION_FOLDER)) {
    fs.mkdirSync(VERSION_FOLDER);
};

// Same as above, but with '@types' folder
if (!fs.existsSync(TYPES_FOLDER)) {
    fs.mkdirSync(TYPES_FOLDER);
};

// Log Infomations
logger.info("Client Configuration", { USERNAME, VERSION });
logger.info("Target Server Configuration", { SERVER, PORT });

// Create connection
let ClientSettings: Protocol.ClientOptions = { username: USERNAME, version: VERSION, host: SERVER, port: PORT };
let Client = Protocol.createClient(ClientSettings);
let Server: Protocol.Server | null = null;

if (PROXY_ENABLE) {
    Server = Protocol.createServer({ port: PROXY_PORT, version: VERSION, motd: "                 §3§lMinecraft Proxy§r\n                   §b§lRunning now" });
    Server.on("login", e => {
        logger.info("Player", e.username, "connected to proxy server");
        e.write("chat", { position: 1, sender: "0", message: JSON.stringify({ text: "§8[⚡] §3» Welcome §b" + e.username + "§r\n§8[⚡] §3» Server: §b" + SERVER + ":" + PORT }) });
    });
};

// Execute when client connected to server
// @ts-ignore
Client.on("connect", () => logger.info("Connected to", SERVER, "with port", PORT, "using version", VERSION, "and username", USERNAME));

// Redirect packets when proxy server is enabled
if (PROXY_ENABLE && Server instanceof Protocol.Server) {
    Server.on('login', e => {
        Client = Protocol.createClient(ClientSettings);
        bindEvents(Client);

        e.on('packet', (data, meta) => {
            if (meta.state !== states.PLAY) {
                return;
            };

            Client.write(meta.name, data);
        });

        Client.on('packet', (data, meta) => {
            if (meta.state !== states.PLAY) {
                return;
            };

            e.write(meta.name, data)
        });

    });
};

if (!PROXY_ENABLE) {
    bindEvents(Client);
};

function bindEvents(ProtocolClient: Protocol.Client) {
    let date = new Date().getTime();

    ProtocolClient.on("packet", (data, PacketMeta) => {
        if(ignoredPackets.includes(PacketMeta.name)) {
            return;
        };

        let NewDate = new Date().getTime() - date;

        // Get normalized packet name from original packet name
        let NORMALIZED_NAME = NormalizePacketName(PacketMeta.name);

        // Current packet paths
        let PACKET_NAME = NORMALIZED_NAME;
        let PACKET_FILE = path.join(VERSION_FOLDER, PACKET_NAME, "index.ts");
        let PACKET_CONTENT = path.join(VERSION_FOLDER, PACKET_NAME, "index.json");
        let PACKET_INTERFACE = path.join(TYPES_FOLDER, NORMALIZED_NAME + ".d.ts");
        let PACKET_FOLDER = path.join(VERSION_FOLDER, PACKET_NAME);
        let PACKETS_TIME = path.join(VERSION_FOLDER, VERSION + ".txt");
        fs.appendFileSync(PACKETS_TIME, ` ${PacketMeta.name} (${NORMALIZED_NAME}) | ${NewDate.toFixed(1)}ms\n`, "utf8");


        // Let's log this into console using tslog if proxy server is not enabled
        if (!PROXY_ENABLE) {
            // logger.info("S2C | Packet: " + NORMALIZED_NAME, data);
        };

        // Create folder for this packet when not exist
        if (!fs.existsSync(PACKET_FOLDER)) {
            fs.mkdirSync(PACKET_FOLDER);
        };

        // Create typescript interface for this packet
        fs.writeFileSync(PACKET_INTERFACE, json2ts.convert(Stringify(data)).replace("export interface RootObject", "export default interface RootObject"), "utf8");

        // Log information about this to console, ofc if proxy server is not running
        if (!PROXY_ENABLE) {
            logger.info("Created typescript interface for packet", NORMALIZED_NAME);
        };

        // Array with some informations
        let Meta = [
            "Name: " + PacketMeta.name,
            "State: " + PacketMeta.state.toUpperCase(),
            "Normalized Name: " + NORMALIZED_NAME,
            "Minecraft Version: " + VERSION,
            "ISO Creation Date: " + new Date().toISOString(),
            "Creation Date: " + new Date(),
        ];

        // Create typescript file with example use of current packet
        // Import Type For This Packet\nimport RootObject from './../@types/" + NORMALIZED_NAME + ".d';\n
        fs.writeFileSync(PACKET_CONTENT, Stringify(data), "utf8");
        fs.writeFileSync(PACKET_FILE, "/**\n" + Meta.map(e => " * " + e).join("\n") + "\n */\n// Define Default Packet Data\nlet PacketData = " + Stringify(data) + ";\n// Export Default Packet Data as Default\nexport default PacketData;", "utf8");

        // Log information about this to console, same as logging information about typescript interface
        if (!PROXY_ENABLE) {
            logger.info("Created typescript packet example for", NORMALIZED_NAME)
        };

    });
}