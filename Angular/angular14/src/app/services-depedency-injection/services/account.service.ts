import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private logginService: LoggingService) {}

  addAcount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.logginService.newServerCreated(name);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status);
  }
}
