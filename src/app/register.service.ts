import { Injectable } from '@angular/core';
import { register } from './register/register.models';
import {​​​​​​​​​ HttpClient,HttpHeaders}​​​​​​​​​ from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private basepath="http://localhost:4697/api/Userdatas";

  formData:register=new register();
  


  constructor( private http:HttpClient) { }

  httpOptions = 
  {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  } 

  

   

  postData(formdata:register)
  {
    
    let obj:register =new register();
    obj.fullname=formdata.fullname;
    obj.emailid=formdata.emailid;
    obj.password=formdata.password;
    obj.mobilenumber=formdata.mobilenumber;
     return this.http.post(this.basepath,obj).subscribe(data => 
      {
        console.log(data);
        
          
      });
  
    }  

    public getLogin():Observable<any>
   {
     return this.http.get(this.basepath);
   }
}
