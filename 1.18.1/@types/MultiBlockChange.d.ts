export interface ChunkCoordinate {
	x: number;
	z: number;
	y: number;
}

export default interface MultiBlockChange {
	chunkCoordinates: ChunkCoordinate;
	notTrustEdges: boolean;
	records: number[];
}