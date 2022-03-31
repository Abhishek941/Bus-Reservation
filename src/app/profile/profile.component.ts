import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',

  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 message1:string="";
 message2:string="";
 message3:string="";



 public h:any;

 public p:any;


  constructor(private shared:SharedService,private service1:LoginService,private router:Router) {

   }

  ngOnInit(): void {

    this.message1=this.shared.getMessage();
    this.message2=this.shared.getMessage1();
    this.message3=this.shared.getMessage2();
    
}

logout() 
{  
  console.log('logout');  
  this.service1.logout();  
  this.router.navigate(['/login']);  
}   




  

   
}
  




