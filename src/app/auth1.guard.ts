import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate {
  constructor(private router: Router) { }      
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {      
      if (this.isLoggedIn1()) {      
      return true;      
      } 
     
         this.router.navigate(['/admin']);   
         return false;    
       
   
      
  
}      
public isLoggedIn1(): boolean {      
   let status = false;      
   if (localStorage.getItem('isLoggedIn1') == "true") {      
      status = true;      
   }    
   else {      
      status = false;      
      }      
   return status;      
   }    
  
}
