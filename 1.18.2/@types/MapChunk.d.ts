export interface MOTION_BLOCKING {
	type: string;
	value: number[][];
}

export interface WORLD_SURFACE {
	type: string;
	value: number[][];
}

export interface Value {
	mOTION_BLOCKING: MOTION_BLOCKING;
	wORLD_SURFACE: WORLD_SURFACE;
}

export interface Heightmap {
	type: string;
	name: string;
	value: Value;
}

export interface ChunkData {
	type: string;
	data: number[];
}

export interface EmptyBlockLightMask [
	number;
	number;
]

export default interface MapChunk {
	x: number;
	z: number;
	heightmaps: Heightmap;
	chunkData: ChunkData;
	blockEntities: any[];
	trustEdges: boolean;
	skyLightMask: any[];
	blockLightMask: any[];
	emptySkyLightMask: any[];
	emptyBlockLightMask: EmptyBlockLightMask[];
	skyLight: any[];
	blockLight: any[];
}