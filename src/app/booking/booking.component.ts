import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmindashService } from '../admindash.service';
import { LoginService } from '../login.service';

import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  message2:string="";

  public data1:any;

  public item:any;

  p:any;
  q:any;
  r:any;
  s:any;
  t:any;
  u:any;
  v:any;
  k: any;
  m: any;
  l: any;



  constructor(private shared:SharedService,private service:AdmindashService,private service1:LoginService,private router:Router) { }

  ngOnInit(): void {

    this.message2=this.shared.getMessage1();
    this.getadmindashdetails();

   
  }
  logout() 
{  
  console.log('logout');  
  this.service1.logout();  
  this.router.navigate(['/login']);  
}  

  private getadmindashdetails():void{
    this.service.getadmindash().subscribe(res=>
      {
        this.data1=res;

        for(let a of this.data1)
        {
          if(this.message2==a.emailid)
          {
              this.p=a.busname;
              this.q=a.source;
              this.r=a.destination;
              this.k=a.date;
              this.m=a.serviceno;
              this.l=a.arrivaltime;
              this.s=a.seatnumber;
              this.t=a.passengername;
              this.u=a.emailid;
              this.v=a.mobilenumber;
              
          }
        }
      })
  }

  

  

  onDelete(item: string)
  {
  
    if(confirm("Are you sure you want to cancel the Ticket?"))
    {
      this.service.deletedash(item).subscribe(res=>
        {

          alert("Ticket Canceled Succesfully");
        
          console.log(res);
        });
    }
  }

  
  

}
