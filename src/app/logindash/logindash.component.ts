import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogindashService } from '../logindash.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-logindash',
  templateUrl: './logindash.component.html',
  styleUrls: ['./logindash.component.css']
})
export class LogindashComponent implements OnInit {

  


  searchText : any;
  searchText1:any;
  public data1:any;
  m: number=1;
 

  

  constructor(private service:LogindashService,private router:Router,private service1:LoginService) { }

  ngOnInit(): void {

    this.getBusDetails()
  }

  currentDate:any = new Date();

  private getBusDetails():void{
    this.service.getBus().subscribe(result=>
      {
        this.data1=result;
      })
  }

  logout() 
  {  
    console.log('logout');  
    this.service1.logout();  
    this.router.navigate(['/login']);  
  }  
  
  form=new FormGroup(
    {

      from:new FormControl('', [Validators.required]),
      to:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required])

    }
  );

  get f(){  
    return this.form.controls;
  }

  isDisplay = true;
  display()
  {
    
    
    for(let a of this.data1){
      if((this.form.value.from==a.source) && (this.form.value.to==a.destination) && (this.form.value.date==a.date))
      {
        this.m=2;
       break;   
      }
  
      }​​​​​​​​
      if(this.m==1)
      {
        
        alert("No busses  on this date");
  
      }
      else
      {
        this.isDisplay= !this.isDisplay;
      }
  }

  Submit()
  {
    console.log(this.form.value); 
    if((this.form.value.from=='Chennai') && (this.form.value.to=='Hyderabad') && (this.form.value.date=='2022-03-31'))
      {
        this.router.navigate(['/chseat']);    
      }
      else if((this.form.value.from=='Chennai') && (this.form.value.to=='Hyderabad') && (this.form.value.date=='2022-04-01'))
      {
        this.router.navigate(['/chseat1']);
      }
      else if((this.form.value.from=='Haryana') && (this.form.value.to=='Mumbai') && (this.form.value.date=='2022-03-31'))
      {
        this.router.navigate(['/hmseat']);
      }
      else if((this.form.value.from=='Haryana') && (this.form.value.to=='Mumbai') && (this.form.value.date=='2022-04-01'))
      {
        this.router.navigate(['/hmseat1']);
      }
  }

}
