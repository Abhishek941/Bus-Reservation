import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AdmindashService } from '../admindash.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  public data1:any;
  
 public item:any;



 
  

  constructor( private service:AdmindashService, private service1:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getadmindashdetails()

  }

  private getadmindashdetails():void{
    this.service.getadmindash().subscribe(res=>
      {
        this.data1=res;
      });
  }

  logout1() {  
    console.log('logout');  
    this.service1.logout1();  
    this.router.navigate(['/admin']);  
  }  

  onDelete(item: string)
  {
  
    if(confirm("Are you sure you want to cancel the Ticket?"))
    {
      this.service.deletedash(item).subscribe(res=>
        {

          alert("Ticket Canceled Succesfully");
          this.getadmindashdetails();
          console.log(res);
        });
    }
  }

  

}
