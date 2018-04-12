import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';

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
  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.questionForm = this.fb.group({
      question: ['', [Validators.required]],
      answers: this.fb.array([this.createAnswer()])
    });

    this.addAnswer();
  }

  createAnswer() {
    return this.fb.group({
      name: ['', Validators.required]
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

}
