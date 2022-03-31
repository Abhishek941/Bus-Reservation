import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogindashService {

  private basepath="http://localhost:4697/api/Busdetails";

  constructor(private http:HttpClient) { }
  
  public getBus():Observable<any>
  {
    return this.http.get(this.basepath);
  }
}
