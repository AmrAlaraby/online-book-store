import { registerPayload, registerResponse } from './../../auth/interfaces/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginPayload, loginResponse } from 'src/app/auth/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClint:HttpClient
  ) { }

  login(payload:loginPayload):Observable<loginResponse>{
    return this._httpClint.post<loginResponse>('https://upskilling-egypt.com:3007/api/auth/login',payload)
  }

  register(payload:registerPayload):Observable<registerResponse>{
    return this._httpClint.post<registerResponse>('https://upskilling-egypt.com:3007/api/auth/register',payload)
  }
}
