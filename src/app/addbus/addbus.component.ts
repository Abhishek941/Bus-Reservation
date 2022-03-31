import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddbusService } from '../addbus.service';
import { AdminService } from '../admin.service';
import { addbus } from './addbus.models';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {

 

  constructor(public service:AddbusService,private service1:AdminService,private router:Router) {
  }

  data: any;

 ngOnInit(): void {
 
 }
 logout1() {  
  console.log('logout');  
  this.service1.logout1();  
  this.router.navigate(['/admin']);  
} 

currentDate:any = new Date();
 form=new FormGroup(
   {
     bus:new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(15)]),
     ser:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(5),Validators.pattern('^[0-9]*$')]),
     sou:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
     des:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
     date:new FormControl('',[Validators.required]),
     arr:new FormControl('',[Validators.required]),
     dep:new FormControl('',[Validators.required]),
     pri:new FormControl('',[Validators.required]),
     type:new FormControl('',[Validators.required]),
   }
 );

 get f(){
   return this.form.controls;
 }


submit() {
  let d: addbus = new addbus();
  d.busname = this.form.value.bus; 
  d.serviceno = parseInt(this.form.value.ser);
  d.source = this.form.value.sou;
  d.destination = this.form.value.des;
  d.date=this.form.value.date;
  d.arrivaltime = this.form.value.arr;
  d.departuretime = this.form.value.dep;
  d.price = parseInt(this.form.value.pri);
  d.type = this.form.value.type;
  this.service.postData(d);
  this.router.navigate(['/admindash'])
 }




}


