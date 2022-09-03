export interface BlockTag {
	tagName: string;
	entries: number[];
}

export interface ItemTag {
	tagName: string;
	entries: number[];
}

export interface FluidTag {
	tagName: string;
	entries: number[];
}

export interface EntityTag {
	tagName: string;
	entries: number[];
}

export default interface Tags {
	blockTags: BlockTag[];
	itemTags: ItemTag[];
	fluidTags: FluidTag[];
	entityTags: EntityTag[];
}