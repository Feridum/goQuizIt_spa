import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';
import {IQuestion} from '../../redux/question/questions.interface';
import {Observable} from 'rxjs/Observable';
import {getQuestions} from '../../redux/question/questions.actions';
import {deleteQuestion} from '../../redux/question/questions.actions';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  quizId: string;
  questions: Observable<IQuestion[]>;

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {

    this.quizId = this.route.snapshot.params['quizId'];

    if (this.quizId) {
      this.questions = this.ngRedux.select(['questions', 'questions', this.quizId]);
      this.questions.subscribe(questionList => {
        console.log(questionList);
        if (questionList === null || questionList===undefined) {
          this.ngRedux.dispatch(getQuestions(this.quizId));
        }
      });
    }
  }

  deleteQuestion(questionId) {
    this.ngRedux.dispatch(deleteQuestion(this.quizId, questionId));
  }
}
