import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/User';
const users_db = 'http://localhost:5000/users';
const editUser_db = 'http://localhost:5000/users/users';
const deleteUsers_db = 'http://localhost:5000/Users/users';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private myclient: HttpClient) {}
  getAllUsers() {
    return this.myclient.get<User[]>(users_db, {
      headers: requestHeaders,
    });
  }

  getUserById(id: number) {
    return this.myclient.get(users_db + '/' + id, { headers: requestHeaders });
  }
  updateUserDetails(id: number, newUserDetails: any) {
    return this.myclient.patch(
      editUser_db + '/' + id,
      { ...newUserDetails },
      { headers: requestHeaders }
    );
  }
  DeleteUser(id: number) {
    return this.myclient.delete(deleteUsers_db + '/' + id, {
      headers: requestHeaders,
    });
  }
}

const token = localStorage.getItem('token');
const requestHeaders = {
  Authorization: `Bearer ${token}`,
};
