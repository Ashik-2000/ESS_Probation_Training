import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test 1',
      'https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test 2',
      'https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test 3',
      'https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
