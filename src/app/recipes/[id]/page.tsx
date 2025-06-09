import { getRecipe } from '@/services/recipe';
import type { Recipe } from '@/types/recipe';

interface Props { params: { id: string } }

export default async function RecipeDetail({ params }: Props) {
  const recipe: Recipe = await getRecipe(params.id);

  return (
    <article className="max-w-2xl mx-auto p-4 space-y-4">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">{recipe.title}</h1>
        <time className="text-sm text-gray-500">
          {new Date(recipe.createdAt).toLocaleDateString()}
        </time>
      </header>
      <p className="whitespace-pre-wrap">{recipe.content}</p>
    </article>
  );
}
