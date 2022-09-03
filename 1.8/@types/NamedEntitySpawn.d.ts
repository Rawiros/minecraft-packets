export interface Metadata {
	type: number;
	key: number;
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
	currentItem: number;
	metadata: Metadata[];
}