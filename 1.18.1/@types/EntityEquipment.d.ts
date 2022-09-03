export interface Item {
	present: boolean;
}

export interface Equipment {
	slot: number;
	item: Item;
}

export default interface EntityEquipment {
	entityId: number;
	equipments: Equipment[];
}