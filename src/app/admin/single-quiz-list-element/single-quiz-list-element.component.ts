import {Component, Input, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {IAppState} from '../../redux/state.interface';
import {deleteQuiz, setQuizActive, setQuizFinished} from '../../redux/quiz/quiz.actions';
import {API_URL} from '../../constants';

@Component({
  selector: '[app-single-quiz-list-element]',
  templateUrl: './single-quiz-list-element.component.html',
  styleUrls: ['./single-quiz-list-element.component.scss']
})
export class SingleQuizListElementComponent implements OnInit {

  @Input() quiz;
  @select(['router']) route: Observable<string>;
  quizPdfUrl: String;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

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

  deleteQuiz() {
    this.ngRedux.dispatch(deleteQuiz(this.quiz.id));
  }
}
