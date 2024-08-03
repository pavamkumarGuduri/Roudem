import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { domainValidators } from '../Validators';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public companyForm:FormGroup=new FormGroup({
    comanyName:new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    founded:new FormControl(null, [Validators.required] ),
    ceo:new FormControl(null, [Validators.required] ),
    location:new FormGroup({
      address:new FormControl( null, [Validators.required]),
      city:new FormControl(null,[Validators.required]),
      state:new FormControl(null,[Validators.required]),
      zipcode:new FormControl(null,[Validators.required]),
      country:new FormControl(null,[Validators.required]),
      }),
      type:new FormControl(),
      // busFee:new FormControl(),
      // hostelFee:new FormControl()

      departments:new FormArray([])

  })

  get departmentsFormArray(){
    return this.companyForm.get('departments') as FormArray;
  }

  addDepartments(){
this.departmentsFormArray.push(
  new FormGroup({
    departmentName:new FormControl(null,[Validators.required]),
    Head:new FormControl(null,[Validators.required]),
    employees:new FormControl(null, [Validators.required]),
    budget:new FormControl(null, [Validators.required])
  })
)
  }
  deleteDepartment(i:number){
    this.departmentsFormArray.removeAt(i);
  }

  constructor() { 
    this.companyForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{

if(data=='services'){
 //add busfee
 this.companyForm.addControl('service',new FormControl(null, [Validators.required]));
 this.companyForm.removeControl('product')
      }
      else if(data=='products'){
        //add hostel fee
this.companyForm.addControl('product', new FormControl(null,[Validators.required]));
this.companyForm.removeControl('service');
      }
    }
    )
    
  }

  ngOnInit(): void {
  }

  submit(){
    this.companyForm.markAllAsTouched();
    console.log(this.companyForm);
  }

}
