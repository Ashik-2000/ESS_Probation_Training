import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { environment } from '../../../../environments/environment.development';
import { Product } from '../models/excelToJson.mode';

@Injectable({
  providedIn: 'root',
})
export class JsonToExcelDownloadService {
  private http = inject(HttpClient);

  getJsonData() {
    return this.http.get<Product[]>(`${environment.exelFileBaseUrl}`);
  }

  downloadAsExcel(data: Product[], fileName = 'products.xlsx'): void {
    // 1) Map original objects to the exact column names required.
    const mapped = data.map((item) => ({
      'Product Code': item.code,
      'Customer Description': item.description,
      'Customer Price': item.customerPrice,
    }));

    // 2) Create a worksheet from the mapped JSON
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mapped, {
      header: ['Product Code', 'Customer Description', 'Customer Price'],
    });

    // 3) Create a new workbook and append the worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Products');

    // 4) Write the workbook and trigger download in browser
    // This uses SheetJS's browser file saver under the hood.
    XLSX.writeFile(wb, fileName);
  }
}
