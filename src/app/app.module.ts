import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { GradecheckComponent } from './gradecheck/gradecheck.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { EmployeesChatComponent } from './employees-chat/employees-chat.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from  '@angular/common/http';
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
import { UserComponent } from './user/user.component';
import { CapitalDirective } from './capital.directive';
import { PricePipe } from './price.pipe';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { OperationsComponent } from './operations/operations.component';
import { RatingsComponent } from './ratings/ratings.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TextareaChildComponent } from './textarea-child/textarea-child.component';
import { AboutUsModule } from './about-us/about-us.module';
import { ParentItemsComponent } from './parent-items/parent-items.component';
import { ChildItemComponent } from './parent-items/child-item/child-item.component';
import { Siblind1ItemComponent } from './parent-items/siblind1-item/siblind1-item.component';
import { Siblind2ItemComponent } from './parent-items/siblind2-item/siblind2-item.component';
import { Sibling3ItemComponent } from './parent-items/sibling3-item/sibling3-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    DashboardComponent,
    DataBindingComponent,
    WelcomeComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    GradecheckComponent,
    DirectivesComponent,

    EmployeesComponent,
    FlipcartComponent,
    EmployeesChatComponent,
    VehicleComponent,
    AccountsComponent,
    MyntraComponent,
    MailsComponent,
    ReloadComponent,
    PhotoComponent,
    CreateVehicleComponent,
    StudentIdCardsComponent,
    VehicleDetailsComponent,
    CreateAccountComponent,
    AccountDetailsComponent,
    CreateStudentIdsComponent,
    StudentDetailsComponent,
    UserComponent,
    CapitalDirective,
    PricePipe,
    CreateCompanyComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    OperationsComponent,
    RatingsComponent,
    TextareaComponent,
    TextareaChildComponent,
    ParentItemsComponent,
    ChildItemComponent,
    Siblind1ItemComponent,
    Siblind2ItemComponent,
    Sibling3ItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


