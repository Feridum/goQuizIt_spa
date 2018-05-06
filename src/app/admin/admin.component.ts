import { Component, OnInit } from '@angular/core';
import {NgReduxRouter} from '@angular-redux/router';
import {NgRedux} from '@angular-redux/store';
import {createQuiz} from '../redux/quiz/quiz.actions';
import {IAppState} from '../redux/state.interface';
import {logout} from '../redux/auth/auth.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
}
