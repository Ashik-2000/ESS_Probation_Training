import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/account.service';

@Component({
  selector: 'app-services-depedency-injection',
  templateUrl: './services-depedency-injection.component.html',
  styleUrls: ['./services-depedency-injection.component.css'],
})
export class ServicesDepedencyInjectionComponent implements OnInit {
  constructor(private accountService: AccountsService) {}

  accounts: { name: string; status: string }[] = [];

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
