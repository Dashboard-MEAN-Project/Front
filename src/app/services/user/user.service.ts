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
    return this.myclient.get(users_db + '/' + id);
  }
  updateUserDetails(id: number, newUserDetails: any) {
    return this.myclient.put(editUser_db + '/' + id, { ...newUserDetails });
  }
  DeleteUser(id: number) {
    // console.log('deleeet');
    return this.myclient.delete(deleteUsers_db + '/' + id);
  }
}

const token = localStorage.getItem('token');
const requestHeaders = {
  Authorization: `Bearer ${token}`,
};
