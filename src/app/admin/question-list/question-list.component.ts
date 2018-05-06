import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {logout} from '../../redux/auth/auth.actions';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IQuestion} from '../../redux/question/questions.interface';
import {Observable} from 'rxjs/Observable';
import {getQuestions} from '../../redux/question/questions.actions';

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
        if (questionList === null) {
          this.ngRedux.dispatch(getQuestions(this.quizId));
        }
      });
    }
  }
}
