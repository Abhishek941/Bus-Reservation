import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  message1:string="";
  message2:string="";
  message3:string="";

  setMessage(data1: any,data2: any,data3: any)
  {
    this.message1=data1;
    this.message2=data2;
    this.message3=data3;
  }
  getMessage()
  {
    return this.message1;
  }
  getMessage1()
  {
    return this.message2;
  }
  getMessage2()
  {
    return this.message3;
  }

}
