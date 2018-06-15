import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgRedux, select, select$} from '@angular-redux/store';
import {IUnactiveQuiz} from '../../redux/quiz/quiz.interface';
import {Observable} from 'rxjs/Observable';
import {IAppState} from '../../redux/state.interface';
import {SET_QUIZ_ACTIVE_SUCCESS} from '../../redux/quiz/quiz.action-types';
import {setQuizActive, setQuizFinished} from '../../redux/quiz/quiz.actions';
import {API_URL, APP_URL} from '../../constants';

@Component({
  selector: '[app-single-quiz-list-element]',
  templateUrl: './single-quiz-list-element.component.html',
  styleUrls: ['./single-quiz-list-element.component.scss']
})
export class SingleQuizListElementComponent implements OnInit {

  @Input() quiz;
  @select(['router']) route: Observable<string>;
  quizPdfUrl: String;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.ngRedux.select(['auth', 'token']).subscribe((e: any) => {
      this.quizPdfUrl = `${API_URL}/quiz/${this.quiz.id}/pdf?token=${e}`;
    }).unsubscribe();
  }

  setQuizActive() {
    this.ngRedux.dispatch(setQuizActive(this.quiz.id));
  }

  setQuizFinished() {
    this.ngRedux.dispatch(setQuizFinished(this.quiz.id));
  }

}
