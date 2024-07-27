import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  public account:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _accountsService:AccountsService) { 
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _accountsService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.account=data.id;
          },
          (err:any)=>{
            alert("internal server error..!!");
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
