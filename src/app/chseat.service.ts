import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { chseat } from './chseat/chseat.models';

@Injectable({
  providedIn: 'root'
})
export class ChseatService {

  private basepath="http://localhost:4697/api/Bookingdetails";

  formData:chseat=new chseat();


  constructor( private http:HttpClient) { }

  httpOptions = 
  {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  } 

  postData(formdata:chseat){
 
    let obj:chseat =new chseat();
    obj.busname=formdata.busname;
    obj.source=formdata.source;
    obj.destination=formdata.destination;
    obj.date=formdata.date;
    obj.arrivaltime=formdata.arrivaltime;
    obj.serviceno=formdata.serviceno;
    obj.seatnumber=formdata.seatnumber;
    obj.passengername=formdata.passengername
    obj.mobilenumber=formdata.mobilenumber;
    obj.emailid=formdata.emailid;
     return this.http.post(this.basepath,obj).subscribe(data => 
      {
        console.log(data);
        alert("Booking Successfull");
      });
  
    }  
}
