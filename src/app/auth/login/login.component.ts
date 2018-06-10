import { Component, OnInit } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';
import {FETCH_TOKEN_SUCCESS} from '../../redux/auth/auth.action-types';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {fetchToken} from '../../redux/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  canNavigate: Boolean = false;
  constructor(private ngRedux: NgRedux<IAppState>, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  async login() {
    const formValues = this.loginForm.value;
    await this.ngRedux.dispatch(fetchToken(formValues.username, formValues.password)).then((e: any) => {
      if (!e.error) {
        this.canNavigate = true;
      }
    });

    if (this.canNavigate) {
      this.router.navigate(['/admin']);
    }
  }
}
