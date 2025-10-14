import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
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
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
