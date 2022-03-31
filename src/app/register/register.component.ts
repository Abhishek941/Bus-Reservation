import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { ConfirmedValidator } from './confirmed.validator';
import { register } from './register.models';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  encrypt:string="";
  secrect:string="@123createkeydontshare";

  form: FormGroup = new FormGroup({});

  constructor(public service:RegisterService, private router:Router,private fb: FormBuilder) {

    this.form = fb.group(
      {
        full:new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(30)]),
        email:new FormControl('',[Validators.required,Validators.email]),
        pass:new FormControl('',[Validators.required,Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
        cpass:new FormControl('',[Validators.required]),
        mob:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]*$')]), 
      },
   
      {
       validators: ConfirmedValidator('pass', 'cpass')
      }

    );
  }

  data: any;
  public h:any;

  public m:number=1;

 ngOnInit(): void {
  this.getLoginData();
 }
 Encrypt(data1:any)
  {
    this.encrypt=CryptoJS.AES.encrypt(JSON.stringify(data1),this.secrect).toString();
    console.log(this.encrypt);
    return this.encrypt;
  }

 
 private getLoginData():void{
  this.service.getLogin().subscribe(result=>
   {
     this.h=result;
   });
}

 

 get f(){
   return this.form.controls;
 }



submit() {
  let d: register = new register();
  d.fullname = this.form.value.full; 
  d.emailid = this.form.value.email;
  d.password = this.Encrypt(this.form.value.pass);
  d.mobilenumber = this.form.value.mob;
  this.service.postData(d);
  for(let a of this.h){
    if(this.form.value.email==a.emailid)
    {
      this.m=2;
      break;
    }

    }​​​​​​​​
    if(this.m==2){
      alert("This Email is already registered");
    }
    else
    {
      console.log(this.Encrypt(this.form.value.pass));
      alert("Registration Successfull");
      this.router.navigate(['/login']);
    }
  
 }


}


