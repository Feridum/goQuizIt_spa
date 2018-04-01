import { Component, OnInit } from '@angular/core';

const mockData = [
  {
    id: '1',
    name: 'foo1',
    status: 'active',
    token: 'token1'
  },
  {
    id: '2',
    name: 'foo2',
    status: 'active',
    token: 'token2'
  }
]


@Component({
  selector: 'app-active-quiz-list',
  templateUrl: './active-quiz-list.component.html',
  styleUrls: ['./active-quiz-list.component.scss']
})
export class ActiveQuizListComponent implements OnInit {

  activeQuizList = mockData;
  constructor() { }

  ngOnInit() {
  }

}
