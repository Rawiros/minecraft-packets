export interface Data {
	type: string;
	data: any[];
}

export default interface UpdateLight {
	chunkX: number;
	chunkZ: number;
	trustEdges: boolean;
	skyLightMask: number;
	blockLightMask: number;
	emptySkyLightMask: number;
	emptyBlockLightMask: number;
	data: Data;
}