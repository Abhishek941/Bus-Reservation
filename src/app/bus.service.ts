import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private basepath="http://localhost:4697/api/Busdetails";

  constructor(private http:HttpClient) { }

  public deletedash(id:number)
  {
    return this.http.delete(this.basepath +'/'+id);
  }
  
  public getBus():Observable<any>
  {
    return this.http.get(this.basepath);
  }
}
