export interface Record {
	horizontalPos: number;
	y: number;
	blockId: number;
}

export default interface MultiBlockChange {
	chunkX: number;
	chunkZ: number;
	records: Record[];
}