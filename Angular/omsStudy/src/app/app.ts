import { Component, signal } from '@angular/core';
import { UserGroup } from './user-group/user-group';

@Component({
  selector: 'app-root',
  imports: [UserGroup],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('omsStudy');
}
