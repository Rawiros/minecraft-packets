export interface Item {
	blockId: number;
}

export default interface WindowItems {
	windowId: number;
	items: Item[];
}