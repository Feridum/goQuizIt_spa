import { Component, OnInit } from '@angular/core';
import {select, select$} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {IUnactiveQuiz} from '../../redux/quiz/quiz.interface';


const mapToArray  = obs$ => obs$.map(x => Object.values(x));

@Component({
  selector: 'app-unactive-quiz-list',
  templateUrl: './unactive-quiz-list.component.html',
  styleUrls: ['./unactive-quiz-list.component.scss']
})
export class UnactiveQuizListComponent implements OnInit {

  @select$(['quiz', 'unactiveQuizList'], mapToArray) unactiveQuizList: Observable<IUnactiveQuiz[]>;


  constructor() { }

  ngOnInit() {
  }

}
