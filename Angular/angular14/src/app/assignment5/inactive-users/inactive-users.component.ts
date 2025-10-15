import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../service/users.sevice';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {}

  @Input() users!: string[];

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
