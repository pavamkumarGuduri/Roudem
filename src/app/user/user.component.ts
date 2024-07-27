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
    address:new FormControl({
        city:new FormControl(),
        pincode:new FormControl()
      }
    )

  })
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.UserForm);
    location.reload();
  }
}
