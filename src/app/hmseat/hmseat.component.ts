import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hmseat } from './hmseat.models';
import {HmseatService} from '../hmseat.service';
import { AdmindashService } from '../admindash.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-hmseat',
  templateUrl: './hmseat.component.html',
  styleUrls: ['./hmseat.component.css']
})
export class HmseatComponent implements OnInit {

  
  public data1:any;
  
  public m:number=1;

  isDisableA1=false;isDisableA2=false;isDisableA3=false;isDisableA4=false;isDisableA5=false;isDisableA6=false;isDisableA7=false;
  isDisableA8=false;isDisableA9=false;isDisableA10=false;isDisableA11=false;isDisableA12=false;isDisableA13=false;isDisableA14=false;
  isDisableA15=false; isDisableA16=false; isDisableA17=false; isDisableA18=false; isDisableA19=false; isDisableA20=false;isDisableA21=false;
  isDisableA22=false;isDisableA23=false;isDisableA24=false;isDisableA25=false;isDisableA26=false;isDisableA27=false;isDisableA28=false;
  isDisableA29=false;isDisableA30=false;isDisableA31=false;isDisableA32=false;isDisableA33=false;isDisableA34=false;isDisableA35=false;isDisableA36=false;
  isDisable=true;
  constructor(public service:HmseatService, private router:Router,private service1:AdmindashService,private service2:LoginService) {
  }

  data: any;

  private getadmindashdetails():void{
    this.service1.getadmindash().subscribe(res=>
      {
        this.data1=res;
        this.data1.forEach((element:any) => {
          if(element.seatnumber=="B1")
          {
            this.isDisableA1=true;
          }
          if(element.seatnumber=="B2")
          {
            this.isDisableA2=true;
          }
          if(element.seatnumber=="B3")
          {
            this.isDisableA3=true;
          }
          if(element.seatnumber=="B4")
          {
            this.isDisableA4=true;
          }
          if(element.seatnumber=="B5")
          {
            this.isDisableA5=true;
          }
          if(element.seatnumber=="B6")
          {
            this.isDisableA6=true;
          }
          if(element.seatnumber=="B7")
          {
            this.isDisableA7=true;
          }
          if(element.seatnumber=="B8")
          {
            this.isDisableA8=true;
          }
          if(element.seatnumber=="B9")
          {
            this.isDisableA9=true;
          }
          if(element.seatnumber=="B10")
          {
            this.isDisableA10=true;
          }
          if(element.seatnumber=="B11")
          {
            this.isDisableA11=true;
          }
          if(element.seatnumber=="B12")
          {
            this.isDisableA12=true;
          }
          if(element.seatnumber=="B13")
          {
            this.isDisableA13=true;
          }
          if(element.seatnumber=="B14")
          {
            this.isDisableA14=true;
          }
          if(element.seatnumber=="B15")
          {
            this.isDisableA15=true;
          }
          if(element.seatnumber=="B16")
          {
            this.isDisableA16=true;
          }
          if(element.seatnumber=="B17")
          {
            this.isDisableA17=true;
          }
          if(element.seatnumber=="B18")
          {
            this.isDisableA18=true;
          }
          if(element.seatnumber=="B19")
          {
            this.isDisableA19=true;
          }
          if(element.seatnumber=="B20")
          {
            this.isDisableA20=true;
          }
          if(element.seatnumber=="B21")
          {
            this.isDisableA21=true;
          }
          if(element.seatnumber=="B22")
          {
            this.isDisableA22=true;
          }
          if(element.seatnumber=="B23")
          {
            this.isDisableA23=true;
          }
          if(element.seatnumber=="B24")
          {
            this.isDisableA24=true;
          }
          if(element.seatnumber=="B25")
          {
            this.isDisableA25=true;
          }
          if(element.seatnumber=="B26")
          {
            this.isDisableA26=true;
          }
          if(element.seatnumber=="B27")
          {
            this.isDisableA27=true;
          }
          if(element.seatnumber=="B28")
          {
            this.isDisableA28=true;
          }
          if(element.seatnumber=="B29")
          {
            this.isDisableA29=true;
          }
          if(element.seatnumber=="B30")
          {
            this.isDisableA30=true;
          }
          if(element.seatnumber=="B31")
          {
            this.isDisableA31=true;
          }
          if(element.seatnumber=="B32")
          {
            this.isDisableA32=true;
          }
          if(element.seatnumber=="B33")
          {
            this.isDisableA33=true;
          }
          if(element.seatnumber=="B34")
          {
            this.isDisableA34=true;
          }
          if(element.seatnumber=="B35")
          {
            this.isDisableA35=true;
          }
          if(element.seatnumber=="B36")
          {
            this.isDisableA36=true;
          }
      });
    })
  }


 ngOnInit(): void {
  this.getadmindashdetails()
 }


 form=new FormGroup(
   {
    
     seat:new FormControl('',[Validators.required]),
     email:new FormControl('',[Validators.required,Validators.email]),
     mob:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]*$')]),
     pasen:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')])
   }
 );

 get f(){
   return this.form.controls;
 }
 logout() 
 {  
   console.log('logout');  
   this.service2.logout();  
   this.router.navigate(['/login']);  
 }  
 



Submit() {
  let d: hmseat = new hmseat();
  d.busname = 'Orange'
  d.source = 'Haryana'; 
  d.destination = 'Mumbai';
  d.date='2022-03-31';
  d.arrivaltime='22:50';
  d.serviceno=parseInt('13325');
  d.seatnumber = this.form.value.seat;
  d.passengername=this.form.value.pasen;
  d.mobilenumber = this.form.value.mob;
  d.emailid = this.form.value.email;
  console.log(this.form.value.soc);
  for(let a of this.data1)
  {
      if(this.form.value.seat==a.seatnumber)
      {
        
        this.m=2;
        break;
      }
    
  }
  if(this.m==2)
  {
    alert("seat is already booked");
    this.router.navigate(['/hmseat']);
  }
  else
  {
    this.service.postData(d);
    this.router.navigate(['/logindash']);
  }
 }
}
