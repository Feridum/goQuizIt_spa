import { Component, OnInit } from '@angular/core';
import {finishPlayerQuiz} from '../../redux/player/player.actions';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';

@Component({
  selector: 'app-finish-quiz',
  templateUrl: './finish-quiz.component.html',
  styleUrls: ['./finish-quiz.component.scss']
})
export class FinishQuizComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.ngRedux.dispatch(finishPlayerQuiz());
  }

}
