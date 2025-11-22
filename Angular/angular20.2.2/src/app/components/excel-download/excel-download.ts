import { Component, inject } from '@angular/core';
import { catchError, of } from 'rxjs';
import { JsonToExcelDownloadService } from './services/json-to-excel-download.service';

@Component({
  selector: 'app-excel-download',
  imports: [],
  templateUrl: './excel-download.html',
  styleUrls: ['./excel-download.css'],
})
export class ExcelDownload {
  loading = false;
  error: string | null = null;
  readonly jsonToExcelDownloadService = inject(JsonToExcelDownloadService);
  onDownload(): void {
    this.error = null;
    this.loading = true;

    this.jsonToExcelDownloadService
      .getJsonData()
      .pipe(
        catchError((err) => {
          // Handle errors gracefully and show message
          console.error('Failed to fetch products', err);
          this.error = 'Could not fetch product data. Check server / network.';
          this.loading = false;
          return of([]); // return empty array so chain continues safely
        })
      )
      .subscribe((products) => {
        // If no products, inform user and don't create empty file
        if (!products || products.length === 0) {
          this.loading = false;
          this.error = this.error || 'No product data returned.';
          return;
        }

        // Call service helper to convert + download
        this.jsonToExcelDownloadService.downloadAsExcel(products, 'products.xlsx');

        // finished
        this.loading = false;
      });
  }
}
