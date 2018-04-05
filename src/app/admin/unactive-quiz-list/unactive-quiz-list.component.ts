import { Component, OnInit } from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {IUnactiveQuiz} from '../../redux/quiz/quiz.interface';


@Component({
  selector: 'app-unactive-quiz-list',
  templateUrl: './unactive-quiz-list.component.html',
  styleUrls: ['./unactive-quiz-list.component.scss']
})
export class UnactiveQuizListComponent implements OnInit {

  @select(['quiz', 'unactiveQuizList']) unactiveQuizList: Observable<IUnactiveQuiz[]>;


  constructor() { }

  ngOnInit() {
  }

}
