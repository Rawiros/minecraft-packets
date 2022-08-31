export interface Metadata {
	key: number;
	type: number;
	value: number;
}

export default interface RootObject {
	entityId: number;
	metadata: Metadata[];
}