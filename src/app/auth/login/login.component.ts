import { Component, OnInit } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';
import {FETCH_TOKEN_SUCCESS} from '../../redux/auth/auth.action-types';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  login() {
    console.log(this.loginForm);
    this.ngRedux.dispatch({type: FETCH_TOKEN_SUCCESS, payload: {token: 'aaa'}});
    this.router.navigate(['/admin']);
  }
}
