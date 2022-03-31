import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private basepath="http://localhost:4697/api/Bookingdetails";

  constructor(private http:HttpClient) { }


  public deletedash(id:string)
  {
    return this.http.delete(this.basepath +'/'+id);
  }
  
  public getadmindash(id:string):Observable<any>
  {
    
    return this.http.get(this.basepath+'/'+id);
  }

}
