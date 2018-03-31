import { Component, OnInit } from '@angular/core';


const mockData = [
  {
    id: '1',
    name: 'foo1',
    status: 'unactive'
  },
  {
    id: '2',
    name: 'foo2',
    status: 'unactive'
  }
]


@Component({
  selector: 'app-unactive-quiz-list',
  templateUrl: './unactive-quiz-list.component.html',
  styleUrls: ['./unactive-quiz-list.component.scss']
})
export class UnactiveQuizListComponent implements OnInit {

  unactiveQuizList = mockData;

  constructor() { }

  ngOnInit() {
  }

}
