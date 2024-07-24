import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public vehicles:any=[];
  public term:string="";
  // public id:number=0;
  public column:string="";
  public order:string="";
  public limit:number=0;
  public pageNo:number=0;
  // public id:string="";


  constructor(private _vehicleService:VehicleService) { 
    _vehicleService.getVehicles().subscribe(
     (data:any)=>{
      this.vehicles=data;
     },
     (err:any)=>{
      alert("internal server error...");
     }
    )
  }

  ngOnInit(): void {
  }

  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
       },
       (err:any)=>{
        alert("internal server error...");
       }
    )
  }

  // filterById(){
  //   this._vehicleService.getFilteredById(this.id).subscribe(
  //     (data:any)=>{
  //       this.vehicles=data;
  //      },
  //      (err:any)=>{
  //       alert("internal server error...");
  //      }
  //   )
  // }

  sort(){ 
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
    (data:any)=>{
      this.vehicles=data;
     },
     (err:any)=>{
      alert("internal server error...");
     }
  )
  }

  page(){ 
    this._vehicleService.getPage(this.limit,this.pageNo).subscribe(
    (data:any)=>{
      this.vehicles=data;
     },
     (err:any)=>{
      alert("internal server error...");
     }
  )
  }

  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succuessfully!!!");
        location.reload();
       },
       (err:any)=>{
        alert("internal server error...");
       }

    )
  }

}
