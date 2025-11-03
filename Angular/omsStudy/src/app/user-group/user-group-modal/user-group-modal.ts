import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserGroupService } from '../../../services/userGroup.service';

@Component({
  selector: 'app-user-group-modal',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './user-group-modal.html',
  styleUrl: './user-group-modal.css',
})
export class UserGroupModal {
  modalRef = inject(BsModalRef);
  userGroupService = inject(UserGroupService);

  fb = new FormBuilder();

  @Output() confirmPOST = new EventEmitter<{ confirm: boolean }>();

  form = this.fb.group({
    name: this.fb.nonNullable.control('', [Validators.required]),
  });

  onSubmit() {
    const name = this.form.controls.name.value.trim();
    this.userGroupService.createUserGroup(name).subscribe({
      next: () => {
        this.confirmPOST.emit({ confirm: true });
        this.modalRef.hide();
      },
      error: (err) => console.log('Error Occured', err),
    });
  }
}
