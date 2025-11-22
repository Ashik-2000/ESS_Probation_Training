import { Component } from '@angular/core';
import { ExcelDownload } from './components/excel-download/excel-download';

@Component({
  selector: 'app-root',
  imports: [ExcelDownload],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
