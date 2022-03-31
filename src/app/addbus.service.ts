import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addbus } from './addbus/addbus.models';

@Injectable({
  providedIn: 'root'
})
export class AddbusService {

  private basepath="http://localhost:4697/api/Busdetails";

  formData:addbus=new addbus();


  constructor( private http:HttpClient) { }

  httpOptions = 
  {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  } 

  postData(formdata:addbus){
 
    let obj:addbus =new addbus();
    obj.busname=formdata.busname;
    obj.serviceno=formdata.serviceno;
    obj.source=formdata.source;
    obj.destination=formdata.destination;
    obj.date=formdata.date;
    obj.arrivaltime=formdata.arrivaltime;
    obj.departuretime=formdata.departuretime;
    obj.price=formdata.price;
    obj.type=formdata.type;
     return this.http.post(this.basepath,obj).subscribe(data => 
      {
        console.log(data);
        alert("Added bus Successfull");
      });
  
    }  
}
