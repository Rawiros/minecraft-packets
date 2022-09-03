export interface Property {
	key: string;
	value: number;
	modifiers: any[];
}

export default interface EntityUpdateAttributes {
	entityId: number;
	properties: Property[];
}