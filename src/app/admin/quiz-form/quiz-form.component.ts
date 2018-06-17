import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAppState} from '../../redux/state.interface';
import {NgRedux} from '@angular-redux/store';
import {ActivatedRoute, Router} from '@angular/router';
import {createQuiz, getInactiveQuizList, updateQuiz} from '../../redux/quiz/quiz.actions';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss'],
})
export class QuizFormComponent implements OnInit {

  quizForm: FormGroup;
  quizId: string;

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.quizForm = this.fb.group({
      title: ['', [Validators.required]],
      mailRequired: [false],
      telephoneNumberRequired: [false],
    });

    this.quizId = this.route.snapshot.params['quizId'];

    if (this.quizId) {
      this.ngRedux.select(['quiz', 'inactiveQuizList']).subscribe(e => {
        if (e === null) {
          this.ngRedux.dispatch(getInactiveQuizList());
        } else {
          this.quizForm.patchValue(e[this.quizId]);
        }
      }).unsubscribe();
    }
  }


  createQuiz() {
      console.log(this.quizForm.value);
    if (!this.quizId) {
      console.log({...this.quizForm.value, ownerId: 'xyz'});
      this.ngRedux.dispatch(createQuiz(this.quizForm.value)).then((e: any) => {
        if (!e.error) {
          this.router.navigate(['/admin']);
        }
      });
    } else {
      this.ngRedux.dispatch(updateQuiz(this.quizId, this.quizForm.value)).then((e: any) => {
        if (!e.error) {
          this.router.navigate(['/admin']);
        }
      });
    }

  }

}
