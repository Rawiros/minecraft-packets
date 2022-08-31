export interface Location {
	x: number;
	z: number;
	y: number;
}

export default interface RootObject {
	location: Location;
	angle: number;
}