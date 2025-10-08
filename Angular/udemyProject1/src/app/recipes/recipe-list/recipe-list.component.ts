import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
