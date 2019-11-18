import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: User;

  constructor(private http: HttpClient) { }

  login(usernamePar: string, passwordPar: string) {
    return this.http.post('http://localhost:8080/login', {username: usernamePar, password: passwordPar})
      .subscribe(data => {
        this.currentUser = data.user;
        console.log(data);
      });
  }

}
