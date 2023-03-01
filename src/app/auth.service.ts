import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  public getConductorInfo() {
    return this.http.get('http://127.0.0.1:8000/api/conductor/conductoryordi');
  }
  public getSeguroInfo() {
    return this.http.get('http://127.0.0.1:8000/api/conductoryordi/info2');
  }

}

