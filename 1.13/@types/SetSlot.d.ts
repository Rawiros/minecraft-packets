export interface Item {
	itemId: number;
}

export default interface SetSlot {
	windowId: number;
	slot: number;
	item: Item;
}