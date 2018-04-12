import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {logout} from '../../redux/auth/auth.actions';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  quizId: string;
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
      this.quizId = this.route.snapshot.params['id'];
  }
}
