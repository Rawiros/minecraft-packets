export interface Infiniburn {
	type: string;
	value: string;
}

export interface Effect {
	type: string;
	value: string;
}

export interface Ultrawarm {
	type: string;
	value: number;
}

export interface Logical_height {
	type: string;
	value: number;
}

export interface Height {
	type: string;
	value: number;
}

export interface Natural {
	type: string;
	value: number;
}

export interface Min_y {
	type: string;
	value: number;
}

export interface Bed_work {
	type: string;
	value: number;
}

export interface Fixed_time {
	type: string;
	value: number[];
}

export interface Coordinate_scale {
	type: string;
	value: number;
}

export interface Piglin_safe {
	type: string;
	value: number;
}

export interface Has_ceiling {
	type: string;
	value: number;
}

export interface Has_skylight {
	type: string;
	value: number;
}

export interface Ambient_light {
	type: string;
	value: number;
}

export interface Has_raid {
	type: string;
	value: number;
}

export interface Respawn_anchor_work {
	type: string;
	value: number;
}

export interface Value {
	infiniburn: Infiniburn;
	effects: Effect;
	ultrawarm: Ultrawarm;
	logical_height: Logical_height;
	height: Height;
	natural: Natural;
	min_y: Min_y;
	bed_works: Bed_work;
	fixed_time: Fixed_time;
	coordinate_scale: Coordinate_scale;
	piglin_safe: Piglin_safe;
	has_ceiling: Has_ceiling;
	has_skylight: Has_skylight;
	ambient_light: Ambient_light;
	has_raids: Has_raid;
	respawn_anchor_works: Respawn_anchor_work;
}

export interface Dimension {
	type: string;
	name: string;
	value: Value;
}

export default interface Respawn {
	dimension: Dimension;
	worldName: string;
	hashedSeed: number[];
	gamemode: number;
	previousGamemode: number;
	isDebug: boolean;
	isFlat: boolean;
	copyMetadata: boolean;
}