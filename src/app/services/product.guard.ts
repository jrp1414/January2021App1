import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ProductService } from './product.service';

@Injectable({providedIn: 'root'})
export class ProductGuard implements CanActivate {
    constructor(private ps:ProductService,private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.ps.getProduct(route.params.id)) {
         return true;   
        }        
        this.router.navigate(["/products"]);
        return false;
    }
}