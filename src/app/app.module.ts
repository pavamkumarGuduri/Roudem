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
import { PipesComponent } from './pipes/pipes.component';
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
    PipesComponent,
    EmployeesComponent,
    FlipcartComponent,
    EmployeesChatComponent,
    VehicleComponent,
    AccountsComponent,
    MyntraComponent,
    MailsComponent,
    ReloadComponent,
    PhotoComponent,
    CreateVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


