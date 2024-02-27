import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const users_db = 'http://localhost:5000/users';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private myclient: HttpClient) {}
  getAllUsers() {
    return this.myclient.get(users_db, {
      headers: requestHeaders,
    });
  }
}

const token = localStorage.getItem('token');
const requestHeaders = {
  Authorization: `Bearer ${token}`,
};
