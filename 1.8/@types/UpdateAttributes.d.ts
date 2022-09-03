export interface Property {
	key: string;
	value: number;
	modifiers: any[];
}

export default interface UpdateAttributes {
	entityId: number;
	properties: Property[];
}