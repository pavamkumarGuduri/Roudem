import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private _httpClient:HttpClient) { }

  login(data:any){
    return this._httpClient.post("https://reqres.in/api/login",data);
  }
}
