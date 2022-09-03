export default interface Respawn {
	dimension: string;
	worldName: string;
	hashedSeed: number[];
	gamemode: number;
	previousGamemode: number;
	isDebug: boolean;
	isFlat: boolean;
	copyMetadata: boolean;
}