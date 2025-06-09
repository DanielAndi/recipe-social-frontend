import { getAllRecipes } from '@/services/recipe';
import RecipeList from '@/components/RecipeList';

export default async function Home() {
  try {
    const recipes = await getAllRecipes();
    
    // Ensure all data is serialized
    const serializedRecipes = recipes.map(recipe => ({
      id: String(recipe.id),
      title: String(recipe.title),
      content: String(recipe.content),
      user_id: String(recipe.user_id),
      createdAt: recipe.createdAt ? new Date(recipe.createdAt).toISOString() : null
    }));

    return <RecipeList recipes={serializedRecipes} />;
  } catch (error) {
    return <p className="p-8 text-red-600">Failed to load feed.</p>;
  }
}
