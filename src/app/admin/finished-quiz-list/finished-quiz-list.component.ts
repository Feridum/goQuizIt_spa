import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {mapToArray} from '../../redux/quiz/quiz.helpers';
import {NgRedux, select$} from '@angular-redux/store';
import {IActiveQuiz, IFinishedQuiz} from '../../redux/quiz/quiz.interface';
import {IAppState} from '../../redux/state.interface';
import {getActiveQuizList, getFinishedQuizList} from '../../redux/quiz/quiz.actions';

@Component({
  selector: 'app-finished-quiz-list',
  templateUrl: './finished-quiz-list.component.html',
  styleUrls: ['./finished-quiz-list.component.scss']
})
export class FinishedQuizListComponent implements OnInit {

  @select$(['quiz', 'finishedQuizList'], mapToArray) finishedQuizList: Observable<IFinishedQuiz[]>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.finishedQuizList.subscribe(quizList => {
      if (quizList === null) {
        this.ngRedux.dispatch(getFinishedQuizList());
      }
    }).unsubscribe();
  }

}
