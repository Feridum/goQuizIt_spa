import {Component, OnInit} from '@angular/core';
import {logout} from '../../redux/auth/auth.actions';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) {
  }

  ngOnInit() {

  }

  logout() {
    this.ngRedux.dispatch(logout());
    this.router.navigate(['/login']);
  }
}
