import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelDownload } from './excel-download';

describe('ExcelDownload', () => {
  let component: ExcelDownload;
  let fixture: ComponentFixture<ExcelDownload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcelDownload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelDownload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
