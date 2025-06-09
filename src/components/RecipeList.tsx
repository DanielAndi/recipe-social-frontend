'use client';

import type { Recipe } from '@/types/recipe';
import RecipeCard from '@/components/RecipeCard';

interface RecipeListProps {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <main className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
        />
      ))}
    </main>
  );
}
