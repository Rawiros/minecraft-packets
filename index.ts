import { Json2Ts } from 'json2ts/src/json2ts';
import Protocol, { states } from 'minecraft-protocol';
import { Logger } from 'tslog';
import path from 'path';
import { appendFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';

type Version = `${string}.${string}.${string}` | `${string}.${string}`;
let sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface Options {
    versions: Version[]
    ignored_packets?: string[]
    host?: string
    port?: number
};

let getNormalizedPacketName = (value: string) => value.split("_").map(e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join("");
let stringify = (data: any) => JSON.stringify(data, (_, value) => (typeof (value) === "bigint") ? value.toString() : value, 4);
let logger = new Logger({ displayFilePath: "hidden", displayFunctionName: false, name: "Minecraft Packets" });
let json2ts = new Json2Ts();

export default async function create(o: Options) {

    if (!o) {
        throw new Error("Provided unknown options")
    };

    if (!o.ignored_packets) {
        o.ignored_packets = [
            "unlock_recipes",
            "update_time",
            "map_chunk",
            "rel_entity_move",
            "entity_move_look",
            "entity_head_rotation",
            "entity_velocity",
        ];
    };

    for (let index in o.versions) {
        let version = o.versions[index]; // version
        let vPath = path.join(__dirname, version); // version path
        let vTypes = path.join(vPath, "@types"); // @types for this version
        let username = Math.random().toString(36).slice(3); // player username
        let vREADME = path.join(vPath, "README.md"); // Readme for this version

        if (!existsSync(vPath)) mkdirSync(vPath);
        if (!existsSync(vTypes)) mkdirSync(vTypes);

        writeFileSync(vREADME, `### ${version}, ${username}\n- Started: \`${new Date().toISOString()}\`\n- Username: \`${username}\`\n\n| Packet Normalized | Packet Name | Time |\n|---|---|---|\n`);
        // create client
        let StartDate = (new Date).getTime();
        let client = Protocol.createClient({ username, version, port: (o?.port) ?? undefined, host: (o?.host) ?? undefined });
        logger.info("Created client for version", version);

        // on connected
        // @ts-ignore
        client.on('connect', () => logger.info("Connected as", username, `(${version})`));

        client.on('packet', (data, meta) => {
            if (o.ignored_packets?.includes(meta.name)) {
                return;
            };

            let NormalizedName = getNormalizedPacketName(meta.name);

            let PacketFolder = path.join(vPath, NormalizedName);
            // let PacketFile = path.join(PacketFolder, "index.ts");
            let PacketJSONFile = path.join(PacketFolder, "index.json");
            let PacketInterfaceFile = path.join(vTypes, NormalizedName + ".d.ts");

            if (!existsSync(PacketFolder)) mkdirSync(PacketFolder);
            writeFileSync(PacketJSONFile, stringify(data), "utf8");
            writeFileSync(PacketInterfaceFile, json2ts.convert(stringify(data)).replace("export interface RootObject", "export default interface " + NormalizedName), "utf8");

            let Time = (new Date).getTime() - StartDate;
            appendFileSync(vREADME, `| ${NormalizedName} | ${meta.name} | ${Time.toFixed(1)}ms\n`);
        });

        await sleep(3500);
    };

};

if (require.main === module) {
    create({ versions: [ "1.18.2" ], host: "localhost", port: 25565, ignored_packets: [] })
    // create({ versions: [ "1.18.2" ], host: "6.tcp.ngrok.io", port: 10475 })
    // create({ versions: ["1.18.2", "1.16", "1.15", "1.14", "1.13", "1.12", "1.11", "1.11.2", "1.10", "1.8", "1.9"], host: "6.tcp.ngrok.io", port: 10475 })
}