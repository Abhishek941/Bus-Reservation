import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private basepath="http://localhost:4697/api/Admindatas";

  constructor(private http :HttpClient) {}

  logout1() :void 
  {    
    localStorage.setItem('isLoggedIn1','false');    
    localStorage.removeItem('token');  
  }
  
   public getAdmin():Observable<any>
   {
     return this.http.get(this.basepath);
   }
}
