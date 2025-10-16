import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test 1',
      'https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg',
      [
        new Ingredient('chicken', 5),
        new Ingredient('fish', 9),
        new Ingredient('tomatos', 4),
      ]
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test 2',
      'https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg',
      [
        new Ingredient('beef', 2),
        new Ingredient('prawns', 7),
        new Ingredient('banana', 6),
      ]
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test 3',
      'https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg',
      [
        new Ingredient('mutton', 8),
        new Ingredient('potatos', 4),
        new Ingredient('garlics', 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientsFromRecipe(ingredients);
  }
}
