export interface Data {
	type: string;
	data: number[];
}

export default interface RootObject {
	channel: string;
	data: Data;
}