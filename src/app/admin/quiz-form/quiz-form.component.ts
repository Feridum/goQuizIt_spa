import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAppState} from '../../redux/state.interface';
import {NgRedux} from '@angular-redux/store';
import {CREATE_QUIZ_SUCCESS} from '../../redux/quiz/quiz.action-types';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizFormComponent implements OnInit {

  quizForm: FormGroup;
  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private router: Router,) { }

  ngOnInit() {
    this.quizForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  createQuiz() {
    this.ngRedux.dispatch({type: CREATE_QUIZ_SUCCESS, payload: this.quizForm.value});
    this.router.navigate(['/admin']);
  }

}
