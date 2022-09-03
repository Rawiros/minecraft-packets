export interface Item {
	present: boolean;
}

export default interface SetSlot {
	windowId: number;
	slot: number;
	item: Item;
}