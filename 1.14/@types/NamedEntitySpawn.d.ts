export interface Metadata {
	key: number;
	type: number;
	value: number;
}

export default interface NamedEntitySpawn {
	entityId: number;
	playerUUID: string;
	x: number;
	y: number;
	z: number;
	yaw: number;
	pitch: number;
	metadata: Metadata[];
}