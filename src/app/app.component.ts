import {Component, OnInit} from '@angular/core';
import {FETCH_TOKEN_SUCCESS} from './redux/auth/auth.action-types';
import {NgRedux} from '@angular-redux/store';
import {Router} from '@angular/router';
import {IAppState} from './redux/state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
