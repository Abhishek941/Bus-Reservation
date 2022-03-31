import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { BusService } from '../bus.service';


@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  public data1:any;

  constructor( private service:BusService,private service1:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getBusdetails();
    
  }
  
  logout1() {  
    console.log('logout');  
    this.service1.logout1();  
    this.router.navigate(['/admin']);  
  } 

  private getBusdetails():void{
    this.service.getBus().subscribe(res=>
      {
        this.data1=res;
      })
  }

  onDelete(item: number)
  {
  
    if(confirm("Are you sure you want to delete the bus?"))
    {
      this.service.deletedash(item).subscribe(res=>
        {
          alert("Bus Canceled Succesfully");
          this.getBusdetails();
          console.log(res);
        });
    }
  }

}
