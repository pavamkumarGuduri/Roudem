import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  constructor(private _httpClient:HttpClient) { }

  getReload(){
    return this._httpClient.get("");
  }

  
}
