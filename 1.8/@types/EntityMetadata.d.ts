export interface Metadata {
	type: number;
	key: number;
	value: number;
}

export default interface EntityMetadata {
	entityId: number;
	metadata: Metadata[];
}