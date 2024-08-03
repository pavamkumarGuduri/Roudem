import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogInService } from '../log-in.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup=new FormGroup({
        email:new FormControl(),
        password:new FormControl( null, [Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),Validators.required])
  })

  constructor(private _logInService:LogInService, private _router:Router) { }

  ngOnInit(): void {
  }

  logIn(){
    console.log(this.loginForm);
    this._logInService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login asuccessfull..");
        //go to dashboard
        this._router.navigateByUrl("/dashboard");
        //store token
        sessionStorage.setItem("my-app-token",data.token);
      },
      (err:any)=>{
        alert("login fail...");
      }
    )
  }

}
