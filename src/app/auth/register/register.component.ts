import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';
import {createAccount} from '../../redux/auth/auth.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  createAccount() {
    console.log(this.registerForm.value)
    this.ngRedux.dispatch(createAccount(this.registerForm.value)).then((e: any) => {
      if (!e.error) {
        this.router.navigate(['/login']);
      }
    });
  }
}
