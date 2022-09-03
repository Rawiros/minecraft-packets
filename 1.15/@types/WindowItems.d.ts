export interface Item {
	present: boolean;
}

export default interface WindowItems {
	windowId: number;
	items: Item[];
}