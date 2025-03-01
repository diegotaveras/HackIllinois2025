export interface Recipetype {
    id: number;
    title: string;
    cost: number;
  }

export interface RecipeListType {
    recipes: Recipetype[]
}