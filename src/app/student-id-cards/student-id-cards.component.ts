import { Component, OnInit } from '@angular/core';
import { StudentIdCardsService } from '../student-id-cards.service';

@Component({
  selector: 'app-student-id-cards',
  templateUrl: './student-id-cards.component.html',
  styleUrls: ['./student-id-cards.component.css']
})
export class StudentIdCardsComponent implements OnInit {

  public StudentDetails:any=[];
  public term:string="";
  public id:string="";
  constructor(private _studentIdCardsService:StudentIdCardsService) {
    _studentIdCardsService.getStudentsDetails().subscribe(
      (data:any)=>{
        this.StudentDetails=data;
      },
      (err:any)=>{
        alert("internal server error...!!!");
      }
    )
  }

  ngOnInit(): void {
  }

  filter(){
this._studentIdCardsService.getFilter(this.term).subscribe(
(data:any)=>{
  this.StudentDetails=data;
},
(err:any)=>{
  alert("internal server error");
}
)
  }

  delete(id:string){
this._studentIdCardsService.deleteStudent(id).subscribe(
  (data:any)=>{
alert("deleted successfully..!!");
location.reload();
  },
  (err:any)=>{
    alert("internal server error..!!");
  }
)
  }
}
