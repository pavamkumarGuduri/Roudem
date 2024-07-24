import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported in your app module

@Component({
  selector: 'app-employees-chat',
  templateUrl: './employees-chat.component.html',
  styleUrls: ['./employees-chat.component.css']
})
export class EmployeesChatComponent implements OnInit {

  public emp: string = "";

  public newEmp = {
    EmpName: "",
    email:"",
    edept:"",
    package: 0,
    age: 0,
    doj:""
  };

  public employees: any[] = [
    { EmpName: 'pavan',email:"pavanguduri@gmail.com",edept:"IT", package: 1000000, age: 25, doj:new Date("12/6/1998") },
    { EmpName: 'kona',email:"kona@gmail.com",edept:"HR", package: 800000, age: 29,doj:new Date("12/6/1998") },
    { EmpName: 'raja',email:"raja@gmail.com", edept:"finance",package: 400000, age: 24, doj:new Date("12/6/1998")},
    { EmpName: 'dev',email:"devkrishna@gmail.com",edept:"IT", package: 300000, age: 35, doj:new Date("12/6/1998") },
    { EmpName: 'ram charan',email:"ramkrishna@gmail.com",edept:"finance", package: 700000, age: 42, doj:new Date("12/6/1998")},
    { EmpName: 'prasad',email:"prasad@gmail.com",edept:"IT", package: 600000, age: 75, doj:new Date("12/6/1998") },
    { EmpName: 'swamy',email:"vvs_swamy@gmail.com",edept:"HR", package: 2500000, age: 45,doj:new Date("12/6/1998")},
    { EmpName: 'pramod',email:"pramod@gmail.com",edept:"IT", package: 900000, age: 27,doj:new Date("12/6/1998")}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  search(emp:string){
    this.employees = this.employees.find( employee=> employee.EmpName.includes("pen"));
  }

  openModal() {
    // Use Angular's ViewChild to open the modal instead of jQuery
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  delete(index: number) {
    this.employees.splice(index, 1);
  }

  addEmployee() {
    this.employees.push({ ...this.newEmp });
    this.newEmp = { EmpName: "",email:'',edept:'', package: 0, age: 0, doj:"" };
    this.closeModal();
  }

  sortByLowToHigh() {
    this.employees.sort((a, b) => a.package - b.package);
  }

  sortByHighToLow() {
    this.employees.sort((a, b) => b.package - a.package);
  }

  totalEmployees() {
    alert(`Total employees: ${this.employees.length}`);
  }

  addtoCart() {
    this.employees.push({...this.newEmp});
   this.newEmp={EmpName:'',email:'', edept:'',package:0,age:0,doj:""};
   }
   send_Email(){
    
   }

}
