import { Component } from '@angular/core';

@Component({
  selector: 'app-server18',
  templateUrl: './server18.component.html',
  styleUrls: ['./server18.component.css'],
})
export class ServerComponent18 {
  serverID = Math.floor(Math.random() * 100);
  serverStatus = 'offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
