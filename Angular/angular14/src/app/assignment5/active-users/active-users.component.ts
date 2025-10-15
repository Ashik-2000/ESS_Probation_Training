import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../service/users.sevice';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {}

  @Input() users!: string[];

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
