export interface Property {
	key: string;
	value: number;
	modifiers: any[];
}

export default interface RootObject {
	entityId: number;
	properties: Property[];
}