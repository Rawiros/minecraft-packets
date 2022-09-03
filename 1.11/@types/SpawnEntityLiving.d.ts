export interface Metadata {
	key: number;
	type: number;
	value: number;
}

export default interface SpawnEntityLiving {
	entityId: number;
	entityUUID: string;
	type: number;
	x: number;
	y: number;
	z: number;
	yaw: number;
	pitch: number;
	headPitch: number;
	velocityX: number;
	velocityY: number;
	velocityZ: number;
	metadata: Metadata[];
}