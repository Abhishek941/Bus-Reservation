import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private basepath="http://localhost:4697/api/Userdatas";

  constructor(private http :HttpClient) {}

  logout() :void 
  {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
  }    


  public getUpdate(id:string,id1:string)
  {
    return this.http.put(this.basepath +'/'+id,id1);
  }
  
   public getLogin():Observable<any>
   {
     return this.http.get(this.basepath);
   }
  }
