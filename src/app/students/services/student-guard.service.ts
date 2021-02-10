import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentEditComponent } from '../student-edit/student-edit.component';

@Injectable({
  providedIn: 'root'
})
export class StudentGuardService implements CanDeactivate<StudentEditComponent> {

  constructor() { }
  canDeactivate(component: StudentEditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
}
