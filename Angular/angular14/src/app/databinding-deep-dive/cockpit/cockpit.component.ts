import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @ViewChild('newServerContent') newServerContent!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(newServerName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: newServerName.value,
      serverContent: this.newServerContent.nativeElement.value,
    });
  }
  onAddBluePrint(newServerName: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: newServerName.value,
      serverContent: this.newServerContent.nativeElement.value,
    });
  }
}
