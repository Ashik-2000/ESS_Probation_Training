import { Component, OnInit } from '@angular/core';
import { CounterService } from './service/counter.service';
import { UsersService } from './service/users.sevice';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css'],
  providers: [UsersService, CounterService],
})
export class Assignment5Component implements OnInit {
  constructor(
    private usersService: UsersService,
    public counterService: CounterService
  ) {}
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
