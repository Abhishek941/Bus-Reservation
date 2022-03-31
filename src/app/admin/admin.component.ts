import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public h:any;

  public m:number=1;


  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getAdminData();
    this.service.logout1();  
  }

  private getAdminData():void{
    this.service.getAdmin().subscribe(result=>
     {
       this.h=result;
     });
  }

  form=new FormGroup(
    {

      id:new FormControl('', [Validators.required,Validators.email]),
      pass:new FormControl('',[Validators.required]),

    }
  );

  get f(){  
    return this.form.controls;
  }

  Submit() {​​​​​​​​​ 
    console.log(this.form.value); 
    for(let a of this.h){
    if((this.form.value.id==a.adminid) && (this.form.value.pass==a.password))
    {
      this.m=2;
      break;
    }

    }​​​​​​​​
    if(this.m==2)
    {
      alert("Login sucessfull");
      localStorage.setItem('isLoggedIn1', "true");  
      localStorage.setItem('token', this.form.value.id);
      this.router.navigate(['/admindash']); 
    }
    else
    {
      alert("Invalid Login Details");
    }
   
  }

}
