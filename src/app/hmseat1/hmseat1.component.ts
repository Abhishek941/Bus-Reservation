import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmindashService } from '../admindash.service';
import { HmseatService } from '../hmseat.service';
import { hmseat } from '../hmseat/hmseat.models';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-hmseat1',
  templateUrl: './hmseat1.component.html',
  styleUrls: ['./hmseat1.component.css']
})
export class Hmseat1Component implements OnInit {

  
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
          if(element.seatnumber=="D1")
          {
            this.isDisableA1=true;
          }
          if(element.seatnumber=="D2")
          {
            this.isDisableA2=true;
          }
          if(element.seatnumber=="D3")
          {
            this.isDisableA3=true;
          }
          if(element.seatnumber=="D4")
          {
            this.isDisableA4=true;
          }
          if(element.seatnumber=="D5")
          {
            this.isDisableA5=true;
          }
          if(element.seatnumber=="D6")
          {
            this.isDisableA6=true;
          }
          if(element.seatnumber=="D7")
          {
            this.isDisableA7=true;
          }
          if(element.seatnumber=="D8")
          {
            this.isDisableA8=true;
          }
          if(element.seatnumber=="D9")
          {
            this.isDisableA9=true;
          }
          if(element.seatnumber=="D10")
          {
            this.isDisableA10=true;
          }
          if(element.seatnumber=="D11")
          {
            this.isDisableA11=true;
          }
          if(element.seatnumber=="D12")
          {
            this.isDisableA12=true;
          }
          if(element.seatnumber=="D13")
          {
            this.isDisableA13=true;
          }
          if(element.seatnumber=="D14")
          {
            this.isDisableA14=true;
          }
          if(element.seatnumber=="D15")
          {
            this.isDisableA15=true;
          }
          if(element.seatnumber=="D16")
          {
            this.isDisableA16=true;
          }
          if(element.seatnumber=="D17")
          {
            this.isDisableA17=true;
          }
          if(element.seatnumber=="D18")
          {
            this.isDisableA18=true;
          }
          if(element.seatnumber=="D19")
          {
            this.isDisableA19=true;
          }
          if(element.seatnumber=="D20")
          {
            this.isDisableA20=true;
          }
          if(element.seatnumber=="D21")
          {
            this.isDisableA21=true;
          }
          if(element.seatnumber=="D22")
          {
            this.isDisableA22=true;
          }
          if(element.seatnumber=="D23")
          {
            this.isDisableA23=true;
          }
          if(element.seatnumber=="D24")
          {
            this.isDisableA24=true;
          }
          if(element.seatnumber=="D25")
          {
            this.isDisableA25=true;
          }
          if(element.seatnumber=="D26")
          {
            this.isDisableA26=true;
          }
          if(element.seatnumber=="D27")
          {
            this.isDisableA27=true;
          }
          if(element.seatnumber=="D28")
          {
            this.isDisableA28=true;
          }
          if(element.seatnumber=="D29")
          {
            this.isDisableA29=true;
          }
          if(element.seatnumber=="D30")
          {
            this.isDisableA30=true;
          }
          if(element.seatnumber=="D31")
          {
            this.isDisableA31=true;
          }
          if(element.seatnumber=="D32")
          {
            this.isDisableA32=true;
          }
          if(element.seatnumber=="D33")
          {
            this.isDisableA33=true;
          }
          if(element.seatnumber=="D34")
          {
            this.isDisableA34=true;
          }
          if(element.seatnumber=="D35")
          {
            this.isDisableA35=true;
          }
          if(element.seatnumber=="D36")
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
  d.busname = 'Meghana Travels'
  d.source = 'Haryana'; 
  d.destination = 'Mumbai';
  d.date='2022-04-01';
  d.arrivaltime='20:30';
  d.serviceno=parseInt('15562');
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
    this.router.navigate(['/hmseat1']);
  }
  else
  {
    this.service.postData(d);
    this.router.navigate(['/logindash']);
  }
 }

}
