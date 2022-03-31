import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { register } from '../register/register.models';
import { SharedService } from '../shared/shared.service';
import { Login } from '../login';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public h:any;

  public m:number=1;

  public p:any;

  public q:any;
  
  public r:any;

 public hari:string="";
public message1:string="";
public message2:string="";
public message3:string="";
  a: any;
  

  encrypt:string="";
  secrect:string="@123createkeydontshare";
  h1:any;
 

  constructor(private service:LoginService,private router:Router,private shared:SharedService, private formBuilder : FormBuilder) { }


  ngOnInit(): void {
    
    this.getLoginData();
    this.service.logout();
  }

  private getLoginData():void{
    this.service.getLogin().subscribe(result=>
     {
       this.h=result;
     });
  }

 
  Decrypt(data2:any)
  {
    
   let bytes=CryptoJS.AES.decrypt(data2,this.secrect);
   var obj=JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
   console.log(obj);
   return obj;
  }

  form=new FormGroup(
    {

      email:new FormControl('', [Validators.required,Validators.email]),
      pass:new FormControl('',[Validators.required]),

    }
  );

  get f(){  
    return this.form.controls;
  }
  

  Submit() {​​​​​​​​​ 
    console.log(this.form.value);
    
    for(let a of this.h){
    
    if((this.form.value.email==a.emailid) && (this.form.value.pass==this.Decrypt(a.password)))
    {
      this.p=a.fullname;

      this.q=a.emailid;

      this.r= a.mobilenumber;

      this.m=2;
     
      break;
    }

    }​​​​​​​​
    if(this.m==2)
    {
      this.message1=this.p;
      this.message2=this.q;
      this.message3=this.r;
      this.shared.setMessage(this.message1,this.message2,this.message3);
      alert("Login sucessfull");
      localStorage.setItem('isLoggedIn', "true");  
      localStorage.setItem('token', this.form.value.email);
      this.router.navigate(['/logindash']); 
    }
    else
    {
      alert("Invalid Login Details");
    }
   
  }
  
}

