export interface Data {
	type: string;
	data: number[];
}

export default interface CustomPayload {
	channel: string;
	data: Data;
}