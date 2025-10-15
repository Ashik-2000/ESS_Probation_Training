import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() users!: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
