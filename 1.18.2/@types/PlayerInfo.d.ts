export interface Data {
	uUID: string;
	name: string;
	properties: any[];
	gamemode: number;
	ping: number;
}

export default interface RootObject {
	action: number;
	data: Data[];
}