export interface Item {
	present: boolean;
}

export interface CarriedItem {
	present: boolean;
}

export default interface WindowItems {
	windowId: number;
	stateId: number;
	items: Item[];
	carriedItem: CarriedItem;
}