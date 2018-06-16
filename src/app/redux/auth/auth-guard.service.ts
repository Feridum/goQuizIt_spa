import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {select$} from '@angular-redux/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/isEmpty';

export const checkIfTokenExist = (obs$: Observable<string>): Observable<boolean> => obs$.map(value => value && value !== '');

@Injectable()
export class AuthGuardService implements CanActivate {
  @select$(['auth', 'token'], checkIfTokenExist) auth$: Observable<boolean>;

  constructor(private router: Router) {
  }

  canActivate() {
    this.auth$.subscribe(value => {
      console.log(value, this.auth$);
      if (!value) {
        this.router.navigate(['/login']);
      }
    });

    return this.auth$;
  }
}
