export interface Location {
	x: number;
	z: number;
	y: number;
}

export default interface BlockChange {
	location: Location;
	type: number;
}