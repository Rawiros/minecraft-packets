export interface Item {
	itemId: number;
}

export default interface WindowItems {
	windowId: number;
	items: Item[];
}