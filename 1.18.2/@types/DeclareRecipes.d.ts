export interface 0 {
	present: boolean;
	itemId: number;
	itemCount: number;
}

export interface Ingredient [
	0;
]

export interface Result {
	present: boolean;
	itemId: number;
	itemCount: number;
}

export interface Data {
	group: string;
	ingredients: Ingredient[];
	result: Result;
}

export interface Recipe {
	type: string;
	recipeId: string;
	data: Data;
}

export default interface RootObject {
	recipes: Recipe[];
}