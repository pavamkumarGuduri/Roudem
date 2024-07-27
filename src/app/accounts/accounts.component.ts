import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  public Accounts:any=[];
  public term:string="";
  
  constructor(private _accountsService:AccountsService) { 

    _accountsService.getAccounts().subscribe(
      (data:any)=>{
        this.Accounts=data;
      },
      (err:any)=>{
        alert("internal server error...");
      }
    )
  }

  ngOnInit(): void {
  }
  filter(){
    this._accountsService.getFilter(this.term).subscribe(
    (data:any)=>{
     this.Accounts=data;
    },
    (err:any)=>{
      alert("internal server error...!!");
    }
    )
  }

  delete(id:string){
    this._accountsService.deleteAccount(id).subscribe(
      (data:any)=>{
        alert("deleted succuessfully!!!");
        location.reload();
       },
       (err:any)=>{
        alert("internal server error...");
       }

    )
  }
}
