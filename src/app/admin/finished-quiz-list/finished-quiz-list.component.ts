import { Component, OnInit } from '@angular/core';

const mockData = [
  {
    id: '1',
    name: 'foo1',
    status: 'finished'
  },
  {
    id: '2',
    name: 'foo2',
    status: 'finished'
  }
]


@Component({
  selector: 'app-finished-quiz-list',
  templateUrl: './finished-quiz-list.component.html',
  styleUrls: ['./finished-quiz-list.component.scss']
})
export class FinishedQuizListComponent implements OnInit {

  finishedQuizList = mockData;
  constructor() { }

  ngOnInit() {
  }

}
