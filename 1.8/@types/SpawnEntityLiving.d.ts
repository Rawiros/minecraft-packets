export interface Metadata {
	type: number;
	key: number;
	value: number;
}

export default interface SpawnEntityLiving {
	entityId: number;
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