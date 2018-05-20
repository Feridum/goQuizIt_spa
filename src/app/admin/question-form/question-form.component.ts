import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import { v4 as uuid } from 'uuid';
import {CREATE_QUESTION_SUCCESS, UPDATE_QUESTION_SUCCESS} from '../../redux/question/questions.action-types';
import 'rxjs/add/operator/filter';
import {IQuestion} from '../../redux/question/questions.interface';
import {createQuestion, getQuestions, updateQuestion} from '../../redux/question/questions.actions';

const minAnswersLength = 2;
const maxAnswersLength = 4;


  @Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {


  questionForm: FormGroup;
  answers: FormArray;
  quizId: string;
  questionId: string;
  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.quizId = this.route.snapshot.params['quizId'];
    this.questionId = this.route.snapshot.params['questionId'];
    this.questionForm = this.fb.group({
      question: this.fb.group({
        value: ['', Validators.required],
        type: ['SINGLE_CHOICE']
      }),
      answers: this.fb.array([this.createAnswer(), this.createAnswer()])
    });

    if (this.questionId) {
      this.ngRedux.select(['questions', 'questions', this.quizId]).subscribe((list: IQuestion[]) => {
        if (list === null) {
          this.ngRedux.dispatch(getQuestions(this.quizId));
        } else {
          const question: IQuestion = list.find(e => e.question.questionId === this.questionId);
          console.log(question);
          if (question.answers.length > 2) {
            for (let i = 0; i < question.answers.length - 2; i++) {
              this.addAnswer();
            }
          }
          this.questionForm.patchValue(question);
        }
      });
    }
  }

  createAnswer() {
    return this.fb.group({
      value: ['', Validators.required],
      positive: [false]
    });
  }

  addAnswer() {
    this.answers = this.questionForm.get('answers') as FormArray;
    if (this.answers.length < maxAnswersLength) {
      this.answers.push(this.createAnswer());
    }
  }

  removeLastAnswer() {
    this.answers = this.questionForm.get('answers') as FormArray;
    if (this.answers.length > minAnswersLength) {
      this.answers.removeAt(this.answers.length - 1);
    }
  }

  get formAnswers() { return <FormArray>this.questionForm.get('answers'); }


  submitForm() {
    console.log(this.questionForm.value);
    if (!this.questionId) {
      this.ngRedux.dispatch(createQuestion(this.quizId, this.questionForm.value)).then((e: any) => {
        if (!e.error) {
          this.location.back();
        }
      });
    } else {
      this.ngRedux.dispatch(updateQuestion(this.quizId, this.questionId, this.questionForm.value)).then((e: any) => {
        if (!e.error) {
          this.location.back();
        }
      });
    }
  }
}
