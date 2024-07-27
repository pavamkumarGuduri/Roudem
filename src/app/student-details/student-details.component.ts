import { Component, OnInit } from '@angular/core';
import { StudentIdCardsService } from '../student-id-cards.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
public student:any={};
  constructor(private _studentIdCardsService:StudentIdCardsService, private _activatedRoute:ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _studentIdCardsService.getStudent(data.id).subscribe(
          (data:any)=>{
            this.student=data.id;
          },
          (error:any)=>{
            alert("internal server error..!!");
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }

}
