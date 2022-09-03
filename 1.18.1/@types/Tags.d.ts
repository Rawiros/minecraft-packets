export interface Tag {
	tagName: string;
	entries: number[];
}

export interface Tag {
	tagType: string;
	tags: Tag[];
}

export default interface Tags {
	tags: Tag[];
}