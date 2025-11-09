import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupModal } from './user-group-modal';

describe('UserGroupModal', () => {
  let component: UserGroupModal;
  let fixture: ComponentFixture<UserGroupModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGroupModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGroupModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
