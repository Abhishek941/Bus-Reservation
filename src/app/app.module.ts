import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { LogindashComponent } from './logindash/logindash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChseatComponent } from './chseat/chseat.component';
import { HmseatComponent } from './hmseat/hmseat.component';
import { BusComponent } from './bus/bus.component';
import { AddbusComponent } from './addbus/addbus.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './booking/booking.component';
import { Chseat1Component } from './chseat1/chseat1.component';
import { Hmseat1Component } from './hmseat1/hmseat1.component';
import { Auth1Guard } from './auth1.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    LogindashComponent,
    AdmindashComponent,
    ChseatComponent,
    HmseatComponent,
    BusComponent,
    AddbusComponent,
    ProfileComponent,
    BookingComponent,
    Chseat1Component,
    Hmseat1Component,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  
  ],
  providers: [AuthGuard,Auth1Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
