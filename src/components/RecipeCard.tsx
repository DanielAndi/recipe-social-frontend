import type { Recipe } from "@/types/recipe";
import Link from "next/link";

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <article className="rounded-xl border shadow-sm overflow-hidden">
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{recipe.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{recipe.content}</p>        <footer className="pt-2 flex justify-between text-xs text-gray-500">
          <span>{recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : 'No date'}</span>
        </footer>
        <Link
          href={`/recipes/${recipe.id}`}
          className="mt-2 inline-block text-blue-600 hover:underline"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
