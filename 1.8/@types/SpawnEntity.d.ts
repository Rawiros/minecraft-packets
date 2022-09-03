export interface ObjectData {
	intField: number;
}

export default interface SpawnEntity {
	entityId: number;
	type: number;
	x: number;
	y: number;
	z: number;
	pitch: number;
	yaw: number;
	objectData: ObjectData;
}