import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAppState} from '../../redux/state.interface';
import {NgRedux} from '@angular-redux/store';
import {CREATE_QUIZ_SUCCESS, UPDATE_QUIZ_SUCCESS} from '../../redux/quiz/quiz.action-types';
import {ActivatedRoute, Router} from '@angular/router';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizFormComponent implements OnInit {

  quizForm: FormGroup;
  quizId: string;
    constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.quizForm = this.fb.group({
      name: ['', [Validators.required]],
    });

    this.quizId = this.route.snapshot.params['quizId'];
    
    if (this.quizId) {
      this.ngRedux.select(['quiz', 'unactiveQuizList', this.quizId]).subscribe(e => this.quizForm.patchValue(e));
    }
  }

  createQuiz() {
    if (!this.quizId) {
      this.ngRedux.dispatch({type: CREATE_QUIZ_SUCCESS, payload: {id: uuid(), ...this.quizForm.value}});
    } else {
      this.ngRedux.dispatch({type: UPDATE_QUIZ_SUCCESS, payload: {id: this.quizId,  ...this.quizForm.value}});
    }

    this.router.navigate(['/admin']);
  }

}
