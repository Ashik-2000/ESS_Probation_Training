import { Component, OnInit } from '@angular/core';

interface InputModel {
  name: string;
  type: String;
  content: String;
}

@Component({
  selector: 'app-databinding-deep-dive',
  templateUrl: './databinding-deep-dive.component.html',
  styleUrls: ['./databinding-deep-dive.component.css'],
})
export class DatabindingDeepDiveComponent implements OnInit {
  serverElements: InputModel[] = [
    {
      type: 'server',
      name: 'TestServer',
      content: 'just a test',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBluePrintAdded(bluePrintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent,
    });
  }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
