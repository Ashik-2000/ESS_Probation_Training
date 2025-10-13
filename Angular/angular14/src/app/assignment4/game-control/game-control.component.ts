import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  @Output() resetGame = new EventEmitter();
  interval!: ReturnType<typeof setInterval>;
  lastNumber: number = 0;
  gameOn: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.gameOn = !this.gameOn;
    this.interval = setInterval(() => {
      this.lastNumber++;
      this.intervalFired.emit(this.lastNumber);
    }, 1000);
  }
  onPauseGame() {
    this.gameOn = !this.gameOn;
    clearInterval(this.interval);
    console.log(this.lastNumber);
  }
  onResetGame() {
    this.lastNumber = 0;
    this.resetGame.emit();
  }
}
