export interface Type {
	type: string;
	value: string;
}

export interface Name {
	type: string;
	value: string;
}

export interface Id {
	type: string;
	value: number;
}

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
}

export interface Element {
	type: string;
	value: Value;
}

export interface Value {
	name: Name;
	id: Id;
	element: Element;
}

export interface Value {
	type: string;
	value: Value[];
}

export interface Value {
	type: string;
	value: Value;
}

export interface Value {
	type: Type;
	value: Value;
}

export interface Minecraft:dimension_type {
	type: string;
	value: Value;
}

export interface Type {
	type: string;
	value: string;
}

export interface Name {
	type: string;
	value: string;
}

export interface Id {
	type: string;
	value: number;
}

export interface Category {
	type: string;
	value: string;
}

export interface Temperature {
	type: string;
	value: number;
}

export interface Downfall {
	type: string;
	value: number;
}

export interface Water_fog_color {
	type: string;
	value: number;
}

export interface Water_color {
	type: string;
	value: number;
}

export interface Fog_color {
	type: string;
	value: number;
}

export interface Offset {
	type: string;
	value: number;
}

export interface Sound {
	type: string;
	value: string;
}

export interface Block_search_extent {
	type: string;
	value: number;
}

export interface Tick_delay {
	type: string;
	value: number;
}

export interface Value {
	offset: Offset;
	sound: Sound;
	block_search_extent: Block_search_extent;
	tick_delay: Tick_delay;
}

export interface Mood_sound {
	type: string;
	value: Value;
}

export interface Sky_color {
	type: string;
	value: number;
}

export interface Value {
	water_fog_color: Water_fog_color;
	water_color: Water_color;
	fog_color: Fog_color;
	mood_sound: Mood_sound;
	sky_color: Sky_color;
}

export interface Effect {
	type: string;
	value: Value;
}

export interface Precipitation {
	type: string;
	value: string;
}

export interface Value {
	category: Category;
	temperature: Temperature;
	downfall: Downfall;
	effects: Effect;
	precipitation: Precipitation;
}

export interface Element {
	type: string;
	value: Value;
}

export interface Value {
	name: Name;
	id: Id;
	element: Element;
}

export interface Value {
	type: string;
	value: Value[];
}

export interface Value {
	type: string;
	value: Value;
}

export interface Value {
	type: Type;
	value: Value;
}

export interface Minecraft:worldgen/biome {
	type: string;
	value: Value;
}

export interface Value {
	minecraft:dimension_type: Minecraft:dimension_type;
	minecraft:worldgen/biome: Minecraft:worldgen/biome;
}

export interface DimensionCodec {
	type: string;
	name: string;
	value: Value;
}

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
}

export interface Dimension {
	type: string;
	name: string;
	value: Value;
}

export default interface RootObject {
	entityId: number;
	isHardcore: boolean;
	gameMode: number;
	previousGameMode: number;
	worldNames: string[];
	dimensionCodec: DimensionCodec;
	dimension: Dimension;
	worldName: string;
	hashedSeed: number[];
	maxPlayers: number;
	viewDistance: number;
	simulationDistance: number;
	reducedDebugInfo: boolean;
	enableRespawnScreen: boolean;
	isDebug: boolean;
	isFlat: boolean;
}