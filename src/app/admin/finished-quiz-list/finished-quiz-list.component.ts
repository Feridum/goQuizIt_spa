import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {mapToArray} from '../../redux/quiz/quiz.helpers';
import {select$} from '@angular-redux/store';
import {IActiveQuiz, IFinishedQuiz} from '../../redux/quiz/quiz.interface';

@Component({
  selector: 'app-finished-quiz-list',
  templateUrl: './finished-quiz-list.component.html',
  styleUrls: ['./finished-quiz-list.component.scss']
})
export class FinishedQuizListComponent implements OnInit {

  @select$(['quiz', 'finishedQuizList'], mapToArray) finishedQuizList: Observable<IFinishedQuiz[]>;

  constructor() { }

  ngOnInit() {
  }

}
