import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgRedux, select, select$} from '@angular-redux/store';
import {IUnactiveQuiz} from '../../redux/quiz/quiz.interface';
import {Observable} from 'rxjs/Observable';
import {IAppState} from '../../redux/state.interface';
import {SET_QUIZ_ACTIVE_SUCCESS} from '../../redux/quiz/quiz.action-types';

@Component({
  selector: '[app-single-quiz-list-element]',
  templateUrl: './single-quiz-list-element.component.html',
  styleUrls: ['./single-quiz-list-element.component.scss']
})
export class SingleQuizListElementComponent implements OnInit {

  @Input() quiz;
  @select(['router']) route: Observable<string>;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {

  }

  setQuizActive() {
    this.ngRedux.dispatch({type: SET_QUIZ_ACTIVE_SUCCESS, payload: {...this.quiz}});
  }

}
