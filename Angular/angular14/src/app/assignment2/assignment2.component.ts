import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
})
export class BooksComponent implements OnInit {
  displayPass = false;
  buttonLogs: number[] = [];
  constructor() {}
  ngOnInit(): void {}
  onToggle() {
    this.displayPass = !this.displayPass;
    this.buttonLogs.push(this.buttonLogs.length + 1);
  }
}
