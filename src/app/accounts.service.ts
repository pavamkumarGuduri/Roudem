import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpClient:HttpClient) { }

  getAccounts(){
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }


  //Filtering-----        get(url?filter=red)
  getFilter(term:String){
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }

  deleteAccount(id:string):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }
  
  createAccount(data:any):Observable<any>{
     return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
  }

  updateAccount(data:any, id:string):Observable<any>{
    return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id,data)
  }

  getAccount(id:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }

}
