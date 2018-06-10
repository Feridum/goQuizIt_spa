import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IQuestion} from '../../redux/question/questions.interface';
import {ActivatedRoute} from '@angular/router';
import {IAppState} from '../../redux/state.interface';
import {getQuestions} from '../../redux/question/questions.actions';
import {NgRedux} from '@angular-redux/store';
import {getQuizResult} from '../../redux/quiz/quiz.actions';
import {IQuizResult} from '../../redux/quiz/quiz.interface';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  quizId: string;
  results: Observable<IQuizResult[]>;

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>) {
  }


  ngOnInit() {

    this.quizId = this.route.snapshot.params['quizId'];
    if (this.quizId) {
      this.results = this.ngRedux.select(['quiz', 'results', this.quizId]);
      this.results.subscribe(questionList => {
        if (questionList === null) {
          this.ngRedux.dispatch(getQuizResult(this.quizId));
        }
      }).unsubscribe();
    }
  }

}
