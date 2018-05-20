import { Component, OnInit } from '@angular/core';
import {IUnactiveQuiz} from '../../redux/quiz/quiz.interface';
import {select, select$} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {mapToArray} from '../../redux/quiz/quiz.helpers';
import {IPlayerAnswer, IPlayerQuestion} from '../../redux/player/player.interface';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit {

  @select(['player', 'question']) question: Observable<IPlayerQuestion>;
  @select$(['player', 'answers'], mapToArray) answers: Observable<IPlayerAnswer[]>;
  constructor() { }

  ngOnInit() {
  }

}
