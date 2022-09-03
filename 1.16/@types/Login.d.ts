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

export interface Coordinate_scale {
	type: string;
	value: number;
}

export interface Piglin_safe {
	type: string;
	value: number;
}

export interface Has_skylight {
	type: string;
	value: number;
}

export interface Has_ceiling {
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

export interface Name {
	type: string;
	value: string;
}

export interface Shrunk {
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
	coordinate_scale: Coordinate_scale;
	piglin_safe: Piglin_safe;
	has_skylight: Has_skylight;
	has_ceiling: Has_ceiling;
	ambient_light: Ambient_light;
	has_raids: Has_raid;
	respawn_anchor_works: Respawn_anchor_work;
	name: Name;
	shrunk: Shrunk;
}

export interface Value {
	type: string;
	value: Value[];
}

export interface Dimension {
	type: string;
	value: Value;
}

export interface Value {
	dimension: Dimension;
}

export interface DimensionCodec {
	type: string;
	name: string;
	value: Value;
}

export default interface Login {
	entityId: number;
	gameMode: number;
	previousGameMode: number;
	worldNames: string[];
	dimensionCodec: DimensionCodec;
	dimension: string;
	worldName: string;
	hashedSeed: number[];
	maxPlayers: number;
	viewDistance: number;
	reducedDebugInfo: boolean;
	enableRespawnScreen: boolean;
	isDebug: boolean;
	isFlat: boolean;
}