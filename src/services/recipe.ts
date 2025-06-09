import api from '@/lib/api';
import type { Recipe } from '@/types/recipe';

/* ---- Queries ---- */
export const getAllRecipes = async () => {
  const { data } = await api.get<Recipe[]>('/recipes');
  return data;
};

export const getRecipe = async (id: string) => {
  const { data } = await api.get<Recipe>(`/recipes/${id}`);
  return data;
};

/* ---- Mutations ---- */
export const createRecipe = async (payload: Partial<Recipe>) => {
  const { data } = await api.post<Recipe>('/recipes', payload);
  return data;
};

export const likeRecipe = async (id: string) => {
  const { data } = await api.post<Recipe>(`/recipes/${id}/like`);
  return data;
};
