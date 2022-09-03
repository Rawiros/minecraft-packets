export interface Item {
	present: boolean;
}

export default interface EntityEquipment {
	entityId: number;
	slot: number;
	item: Item;
}