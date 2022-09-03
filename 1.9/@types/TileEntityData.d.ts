export interface Location {
	x: number;
	y: number;
	z: number;
}

export interface Id {
	type: string;
	value: string;
}

export interface X {
	type: string;
	value: number;
}

export interface Y {
	type: string;
	value: number;
}

export interface Z {
	type: string;
	value: number;
}

export interface Value {
	id: Id;
	x: X;
	y: Y;
	z: Z;
}

export interface NbtData {
	type: string;
	name: string;
	value: Value;
}

export default interface TileEntityData {
	location: Location;
	action: number;
	nbtData: NbtData;
}