export interface Recipetype {
    id: number;
    title: string;
    cost: number;
    ingredients: string;
    imageURL: string;
  }

export interface RecipeListType {
    recipes: Recipetype[]
}