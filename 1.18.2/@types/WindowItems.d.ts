export interface Item {
	present: boolean;
}

export interface CarriedItem {
	present: boolean;
}

export default interface RootObject {
	windowId: number;
	stateId: number;
	items: Item[];
	carriedItem: CarriedItem;
}