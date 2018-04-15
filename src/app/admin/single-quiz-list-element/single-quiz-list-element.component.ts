import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, select$} from '@angular-redux/store';
import {IUnactiveQuiz} from '../../redux/quiz/quiz.interface';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: '[app-single-quiz-list-element]',
  templateUrl: './single-quiz-list-element.component.html',
  styleUrls: ['./single-quiz-list-element.component.scss']
})
export class SingleQuizListElementComponent implements OnInit {

  @Input() quiz;
  @select(['router']) route: Observable<string>;
  constructor() { }

  ngOnInit() {

  }

}
