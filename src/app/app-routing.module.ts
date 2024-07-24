import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { EmployeesChatComponent } from './employees-chat/employees-chat.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MyntraComponent } from './myntra/myntra.component';
import { MailsComponent } from './mails/mails.component';
import { ReloadComponent } from './reload/reload.component';
import { PhotoComponent } from './photo/photo.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children:[
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'calculator', component: CalculatorComponent },
  {path: 'rectangle',component:RectangleComponent},
  {path:'circle',component:CircleComponent},
  {path:'bmi',component:BMIComponent},  
  {path: 'directives', component:DirectivesComponent},
  {path:'pipes',component:PipesComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'flipcart',component:FlipcartComponent},
  {path:'employee-chat',component:EmployeesChatComponent},
  {path:'vehicle',component:VehicleComponent},
  {path:'Accounts',component:AccountsComponent},
  {path:'myntra',component:MyntraComponent},
  {path:'Mails',component:MailsComponent},
  {path:'Reload',component:ReloadComponent},
  {path:'photo',component:PhotoComponent},
  {path:'create-vehicle',component:CreateVehicleComponent}
]},

{ path: '', redirectTo: 'login', pathMatch: 'full' } // Add this to redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

