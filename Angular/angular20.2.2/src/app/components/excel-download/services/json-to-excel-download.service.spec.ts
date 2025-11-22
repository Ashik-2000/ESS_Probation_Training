import { TestBed } from '@angular/core/testing';

import { JsonToExcelDownloadService } from './json-to-excel-download.service';

describe('JsonToExcelDownloadService', () => {
  let service: JsonToExcelDownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonToExcelDownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
