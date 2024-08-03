import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { domainValidators } from '../Validators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public UserForm:FormGroup=new FormGroup({
    name:new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age:new FormControl(null, [Validators.required,Validators.min(0), Validators.max(100)] ),
    phone:new FormControl(null, [Validators.required,Validators.min(1000000000), Validators.max(9999999999)] ),
    email:new FormControl( null, [Validators.required,Validators.email,domainValidators]),
    address:new FormGroup({
        city:new FormControl( null, [Validators.required]),
        pincode:new FormControl(null,[Validators.required])
      }),
      type:new FormControl(),
      // busFee:new FormControl(),
      // hostelFee:new FormControl()

      cards:new FormArray([])

  })
  get cardsFormArray(){
    return this.UserForm.get('cards') as FormArray;
  }

  addCards(){
    this.cardsFormArray.push(
      new FormGroup({
        Number:new FormControl(null,[Validators.required]),
        expiry:new FormControl(null, [Validators.required]),
        cvv:new FormControl(null, [Validators.required])
      })
    )
  }

  deleteCard(i:number){
 this.cardsFormArray.removeAt(i);
  }

  constructor() {
    this.UserForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{

if(data=='DayScholor'){
 //add busfee
 this.UserForm.addControl('busFee',new FormControl(null, [Validators.required,Validators.min(10000)]));
 this.UserForm.removeControl('hostelfee')
      }
      else if(data=='residentioal'){
        //add hostel fee
this.UserForm.addControl('hostelFee', new FormControl(null,[Validators.required,Validators.min(12000)]));
this.UserForm.removeControl('busFee');
      }
    }
    )
   }

  ngOnInit(): void {
  }

  submit(){
    this.UserForm.markAllAsTouched();
    console.log(this.UserForm);
  }


}
