import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public UserForm:FormGroup=new FormGroup({
    name:new FormControl(),
    age:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
    address:new FormGroup({
        city:new FormControl(),
        pincode:new FormControl()
      }),
      type:new FormControl(),
      // busFee:new FormControl(),
      // hostelFee:new FormControl()
  })
  constructor() {
    this.UserForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{

if(data=='DayScholor'){
 //add busfee
 this.UserForm.addControl('busFee',new FormControl());
 this.UserForm.removeControl('hostelfee')
      }
      else if(data=='residentioal'){
        //add hostel fee
this.UserForm.addControl('hostelFee', new FormControl());
this.UserForm.removeControl('busFee');
      }
    }
    )
   }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.UserForm);
  }
}
