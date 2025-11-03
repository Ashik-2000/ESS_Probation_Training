import { Component, computed, inject, signal } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { derivedAsync } from 'ngxtension/derived-async';
import { UserGroupService } from '../../services/userGroup.service';
import { UserGroupModal } from './user-group-modal/user-group-modal';

@Component({
  selector: 'app-user-group',
  imports: [],
  templateUrl: './user-group.html',
  styleUrls: ['./user-group.css'],
})
export class UserGroup {
  private userGroupService = inject(UserGroupService);
  private modalService = inject(BsModalService);
  refresh = signal(0);

  constructor() { }
  
  userGroupList = derivedAsync(() => {
    this.refresh();
    return this.userGroupService.getUserGroupList();
  });
  userGroup = computed(() => this.userGroupList() ?? []);

  openModal() {
    const itialState = {
      name: 'Ashik',
    };
    const modalRef = this.modalService.show(UserGroupModal);
    modalRef.content?.confirmPOST.subscribe((result) => {
      if (result.confirm) {
        this.refresh.update((prev) => prev + 1);
      }
    });
  }
}
