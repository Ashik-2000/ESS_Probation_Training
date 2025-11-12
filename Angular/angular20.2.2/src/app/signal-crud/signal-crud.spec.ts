import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCrud } from './signal-crud';

describe('SignalCrud', () => {
  let component: SignalCrud;
  let fixture: ComponentFixture<SignalCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalCrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
