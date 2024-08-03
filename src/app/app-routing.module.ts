import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { StudentIdCardsComponent } from './student-id-cards/student-id-cards.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { CreateStudentIdsComponent } from './create-student-ids/create-student-ids.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { UserComponent } from './user/user.component';
import { NotifyGuard } from './notify.guard';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { TextareaComponent } from './textarea/textarea.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { ParentItemsComponent } from './parent-items/parent-items.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',canActivate:[AuthenticationGuard],component: DashboardComponent, children:[
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'calculator', component: CalculatorComponent },
  {path: 'rectangle',component:RectangleComponent},
  {path:'circle',component:CircleComponent},
  {path:'bmi',component:BMIComponent},  
  {path: 'directives', component:DirectivesComponent},
  
  {path:'employees',component:EmployeesComponent},
  {path:'flipcart',component:FlipcartComponent},
  {path:'employee-chat',component:EmployeesChatComponent},
  {path:'vehicle',component:VehicleComponent},
  {path:'Accounts',component:AccountsComponent},
  {path:'myntra',component:MyntraComponent},
  {path:'Mails',component:MailsComponent},
  {path:'Reload',component:ReloadComponent},
  {path:'photo',component:PhotoComponent},
  {path:'create-vehicle',component:CreateVehicleComponent},
  {path:'vehicle-details/:id',component:VehicleDetailsComponent},
  {path:'edit-vehicle/:id',component:CreateVehicleComponent},
  {path:'create-account',component:CreateAccountComponent},
  {path:'account-details/:id',component:AccountDetailsComponent},
  {path:'edit-account/:id',component:CreateAccountComponent},
  {path:'studentIdCards',component:StudentIdCardsComponent},
  {path:'create-student-ids',component:CreateStudentIdsComponent},
  {path:'edit-idcards/:id',component:CreateStudentIdsComponent},
  {path:'student-details/:id',component:StudentDetailsComponent},
  {path:'user',canDeactivate:[NotifyGuard], component:UserComponent},
  {path:'create-company', canDeactivate:[NotifyGuard], component:CreateCompanyComponent},
  {path:'parent',component:ParentComponent},
  {path:'textarea',component:TextareaComponent},
  {path:'about-company',component:AboutCompanyComponent},
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
  },
  {path:'parent-items',component:ParentItemsComponent}
]},

// {path:'',component:LoginComponent},
// {path:'**', component:PageNotfoundComponent}
{ path: '', redirectTo: 'login', pathMatch: 'full' } // Add this to redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

