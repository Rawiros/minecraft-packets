export interface Data {
	uUID: string;
	ping: number;
}

export default interface PlayerInfo {
	action: number;
	data: Data[];
}