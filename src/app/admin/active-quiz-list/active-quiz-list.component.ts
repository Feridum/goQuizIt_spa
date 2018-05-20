import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {mapToArray} from '../../redux/quiz/quiz.helpers';
import {NgRedux, select$} from '@angular-redux/store';
import {IActiveQuiz, IUnactiveQuiz} from '../../redux/quiz/quiz.interface';
import {getActiveQuizList, getInactiveQuizList} from '../../redux/quiz/quiz.actions';
import {IAppState} from '../../redux/state.interface';

const mockData = [
  {
    id: '1',
    name: 'foo1',
    status: 'active',
    token: 'token1'
  },
  {
    id: '2',
    name: 'foo2',
    status: 'active',
    token: 'token2'
  }
]


@Component({
  selector: 'app-active-quiz-list',
  templateUrl: './active-quiz-list.component.html',
  styleUrls: ['./active-quiz-list.component.scss']
})
export class ActiveQuizListComponent implements OnInit {

  @select$(['quiz', 'activeQuizList'], mapToArray) activeQuizList: Observable<IActiveQuiz[]>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.activeQuizList.subscribe(quizList => {
      if (quizList === null) {
        this.ngRedux.dispatch(getActiveQuizList());
      }
    });
  }

}
