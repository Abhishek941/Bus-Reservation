import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbusComponent } from './addbus/addbus.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AuthGuard } from './auth.guard';
import { Auth1Guard } from './auth1.guard';
import { BookingComponent } from './booking/booking.component';
import { BusComponent } from './bus/bus.component';
import { ChseatComponent } from './chseat/chseat.component';
import { Chseat1Component } from './chseat1/chseat1.component';

import { HmseatComponent } from './hmseat/hmseat.component';
import { Hmseat1Component } from './hmseat1/hmseat1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogindashComponent } from './logindash/logindash.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [{path:'home',component:HomeComponent},
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'admin',component:AdminComponent},
{path:'logindash',component:LogindashComponent,canActivate : [AuthGuard]},
{path:'admindash',component:AdmindashComponent,canActivate : [Auth1Guard]},
{path:'chseat',component:ChseatComponent,canActivate : [AuthGuard]},
{path:'hmseat',component:HmseatComponent,canActivate : [AuthGuard]},
{path:'bus',component:BusComponent,canActivate : [Auth1Guard]},
{path:'addbus',component:AddbusComponent,canActivate : [Auth1Guard]},
{path:'profile',component:ProfileComponent,canActivate : [AuthGuard]},
{path:'booking',component:BookingComponent,canActivate : [AuthGuard]},
{path:'chseat1',component:Chseat1Component,canActivate : [AuthGuard]},
{path:'hmseat1',component:Hmseat1Component,canActivate : [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
