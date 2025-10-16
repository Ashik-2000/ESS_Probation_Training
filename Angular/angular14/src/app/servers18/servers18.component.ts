import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers18',
  templateUrl: './servers18.component.html',
  styleUrls: ['./servers18.component.css'],
})
export class ServersComponent18 implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName: string = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2', 'TestServer3'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    console.log(this.servers);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }
}
