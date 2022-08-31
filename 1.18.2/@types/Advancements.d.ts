export interface Icon {
	present: boolean;
	itemId: number;
	itemCount: number;
}

export interface Flag {
	_unused: number;
	hidden: number;
	show_toast: number;
	has_background_texture: number;
}

export interface DisplayData {
	title: string;
	description: string;
	icon: Icon;
	frameType: number;
	flags: Flag;
	xCord: number;
	yCord: number;
}

export interface Criteria {
	key: string;
}

export interface Requirement [
	string;
]

export interface Value {
	parentId: string;
	displayData: DisplayData;
	criteria: Criteria[];
	requirements: Requirement[];
}

export interface AdvancementMapping {
	key: string;
	value: Value;
}

export interface Value {
	criterionIdentifier: string;
}

export interface ProgressMapping {
	key: string;
	value: Value[];
}

export default interface RootObject {
	reset: boolean;
	advancementMapping: AdvancementMapping[];
	identifiers: any[];
	progressMapping: ProgressMapping[];
}