import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public id:string="";
  public accountForm:FormGroup= new FormGroup({
    account_name:new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl(),
    })
    
  constructor(private _accountsService:AccountsService, private _activatedRoute:ActivatedRoute) { 
_activatedRoute.params.subscribe(
  (data:any)=>{
    this.id=data.id;                 
    _accountsService.getAccount(data.id).subscribe(
(data:any)=>{
  this.accountForm.patchValue(data);
}
    )
  }
)
  }
  ngOnInit(): void {
  }

  submit(){
console.log(this.accountForm.value);

if(this.id){
this._accountsService.updateAccount(this.accountForm.value, this.id).subscribe(
  (data:any)=>{
    alert("updated succesfully..!");
    this.accountForm.reset();
  }
)
}
else{
  this._accountsService.createAccount(this.accountForm.value).subscribe(
  (data:any)=>{
    alert("create successfully..!!");
    this.accountForm.reset();
  },
  (err:any)=>{
    alert("internal server error..");
  }
)
  }
}
}
