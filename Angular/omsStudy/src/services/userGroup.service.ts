import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserGroupService {
  private http = inject(HttpClient);

  getUserGroupList() {
    return this.http.get<userGroup[]>('http://localhost:3000/userGroups');
  }
  createUserGroup(name: string) {
    return this.http.post('http://localhost:3000/userGroups', { name, status: 'Active' });
  }
}
