import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  constructor(private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe((status) =>
      alert(`New status: ${status}`)
    );
  }
  ngOnInit(): void {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAcount(accountName, accountStatus);
  }
}
