import {Component, OnInit} from '@angular/core';
import {NgRedux, select$} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {IUnactiveQuiz} from '../../redux/quiz/quiz.interface';
import {mapToArray} from '../../redux/quiz/quiz.helpers';
import {getInactiveQuizList} from '../../redux/quiz/quiz.actions';
import {IAppState} from '../../redux/state.interface';

@Component({
  selector: 'app-inactive-quiz-list',
  templateUrl: './inactive-quiz-list.component.html',
  styleUrls: ['./inactive-quiz-list.component.scss']
})
export class InactiveQuizListComponent implements OnInit {

  @select$(['quiz', 'inactiveQuizList'], mapToArray) inactiveQuizList: Observable<IUnactiveQuiz[]>;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
    this.inactiveQuizList.subscribe(quizList => {
      if (quizList === null) {
        this.ngRedux.dispatch(getInactiveQuizList());
      }
    }).unsubscribe();
  }
}
