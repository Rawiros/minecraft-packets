export interface Item {
	blockId: number;
}

export default interface SetSlot {
	windowId: number;
	slot: number;
	item: Item;
}