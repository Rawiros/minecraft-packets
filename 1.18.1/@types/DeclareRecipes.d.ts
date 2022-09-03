export interface Result {
	present: boolean;
	itemId: number;
	itemCount: number;
}

export interface Data {
	width: number;
	height: number;
	group: string;
	ingredients: any[][][];
	result: Result;
}

export interface Recipe {
	type: string;
	recipeId: string;
	data: Data;
}

export default interface DeclareRecipes {
	recipes: Recipe[];
}