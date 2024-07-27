import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentIdCardsService } from '../student-id-cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-student-ids',
  templateUrl: './create-student-ids.component.html',
  styleUrls: ['./create-student-ids.component.css']
})
export class CreateStudentIdsComponent implements OnInit {
public id:string="";
  public studentForm:FormGroup=new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    dob:new FormControl(),
    profile_picture:new FormControl(),
    email:new FormControl(),
    school_logo:new FormControl(),
    school_name:new FormControl(),
    school_city:new FormControl(),
    school_pin:new FormControl()
  })

  constructor(private _studentIdCardsService:StudentIdCardsService, private _activatedRoute:ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        _studentIdCardsService.getStudent(data.id).subscribe(
          (data:any)=>{
            this.studentForm.patchValue(data);
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.studentForm.value);

    if(this.id){
      this._studentIdCardsService.studentDataUpdate(this.studentForm.value , this.id).subscribe(
         (data:any)=>{
          alert("update succesfully...");
          this.studentForm.reset();
         }
      )
    }
    else{
    this._studentIdCardsService.createStudent(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("student id created successfully...!!");
        this.studentForm.reset();
      },
      (err:any)=>{
        alert("internal server error..")
      }
    )
    
  }
}
}
