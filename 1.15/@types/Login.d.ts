export default interface Login {
	entityId: number;
	gameMode: number;
	dimension: number;
	hashedSeed: number[];
	maxPlayers: number;
	levelType: string;
	viewDistance: number;
	reducedDebugInfo: boolean;
	enableRespawnScreen: boolean;
}