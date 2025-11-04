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
    return this.http.post<void>('http://localhost:3000/userGroups', { name, status: 'Active' });
  }

  updateUserGroup(id: string, data: userGroup) {
    return this.http.put<void>(`http://localhost:3000/userGroups/${id}`, data);
  }
  deleteUserGroup(id: string) {
    return this.http.delete<void>(`http://localhost:3000/userGroups/${id}`);
  }
}
