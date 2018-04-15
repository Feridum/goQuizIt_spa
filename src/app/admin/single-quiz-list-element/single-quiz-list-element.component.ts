import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-single-quiz-list-element]',
  templateUrl: './single-quiz-list-element.component.html',
  styleUrls: ['./single-quiz-list-element.component.scss']
})
export class SingleQuizListElementComponent implements OnInit {

  @Input() quiz;
  constructor() { }

  ngOnInit() {
  }

}
