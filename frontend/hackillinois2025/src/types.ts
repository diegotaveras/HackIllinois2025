export interface Recipetype {
    id: number;
    title: string;
    cost: number;
    ingredients: string;
    imageUrl: string;
  }

export interface RecipeListType {
    recipes: Recipetype[]
}