export interface Metadata {
	key: number;
	type: number;
	value: number;
}

export default interface EntityMetadata {
	entityId: number;
	metadata: Metadata[];
}