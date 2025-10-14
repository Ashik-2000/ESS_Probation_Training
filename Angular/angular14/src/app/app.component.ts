import { Component } from '@angular/core';

interface InputModel {
  name: string;
  type: String;
  content: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // *********** Section 21 ***********
  // serverElements: InputModel[] = [
  //   {
  //     type: 'server',
  //     name: 'TestServer',
  //     content: 'just a test',
  //   },
  // ];
  // onServerAdded(serverData: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent,
  //   });
  // }
  // onBluePrintAdded(bluePrintData: {
  //   serverName: string;
  //   serverContent: string;
  // }) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: bluePrintData.serverName,
  //     content: bluePrintData.serverContent,
  //   });
  // }
  // onChangeFirst() {
  //   this.serverElements[0].name = 'Changed!';
  // }
  // onDestroyFirst() {
  //   this.serverElements.splice(0, 1);
  // }
  // *********** Assignment 4 ***********
  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];
  // onIntervalFired(firedNumber: number) {
  //   if (firedNumber % 2 === 0) {
  //     this.evenNumbers.push(firedNumber);
  //   } else {
  //     this.oddNumbers.push(firedNumber);
  //   }
  //   // console.log(firedNumber);
  // }
  // resetGame() {
  //   this.evenNumbers = [];
  //   this.oddNumbers = [];
  // }
}
