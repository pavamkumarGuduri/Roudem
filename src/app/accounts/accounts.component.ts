import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  public Accounts:any=[];
  constructor(private _accountsService:AccountsService) { 

    _accountsService.getAccounts().subscribe(
      (data:any)=>{
        this.Accounts=data;
      },
      (err:any)=>{
        alert("internal server error...")
      }
    )
  }

  ngOnInit(): void {
  }

}
