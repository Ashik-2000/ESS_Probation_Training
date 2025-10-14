import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives-deep-dive.component.html',
  styleUrls: ['./directives-deep-dive.component.css'],
})
export class DirectivesDeepDiveComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  oddNumbers = [1, 3, 5, 7, 9];
  evenNumbers = [2, 4, 6, 8];
  onlyOdd = false;
  value = 7;
  constructor() {}

  ngOnInit(): void {}
}
