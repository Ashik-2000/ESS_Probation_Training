import { Component, Input, OnInit } from '@angular/core';
import { AccountsService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  constructor(private accountService: AccountsService) {}
  ngOnInit(): void {}

  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
  }
}
