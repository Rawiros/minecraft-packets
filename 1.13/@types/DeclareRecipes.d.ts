export interface Result {
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
	recipeId: string;
	type: string;
	data: Data;
}

export default interface DeclareRecipes {
	recipes: Recipe[];
}