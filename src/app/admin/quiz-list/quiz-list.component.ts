import {Component, OnInit} from '@angular/core';
import {logout} from '../../redux/auth/auth.actions';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';
import {Router} from '@angular/router';
import {getActiveQuizList, getFinishedQuizList, getInactiveQuizList} from '../../redux/quiz/quiz.actions';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) {
  }

  ngOnInit() {
    this.ngRedux.dispatch(getInactiveQuizList());
    this.ngRedux.dispatch(getActiveQuizList());
    this.ngRedux.dispatch(getFinishedQuizList());
  }

  logout() {
    this.ngRedux.dispatch(logout());
    this.router.navigate(['/login']);
  }
}
