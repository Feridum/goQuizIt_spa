import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizFormComponent implements OnInit {

  quizForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.quizForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }



}
