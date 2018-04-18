import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-quiz',
  templateUrl: './search-quiz.component.html',
  styleUrls: ['./search-quiz.component.scss'],
})
export class SearchQuizComponent implements OnInit {

  token: string;
  constructor() { }

  ngOnInit() {
  }

  handleKeydown(event) {
    this.token = event.target.value;
  }

  searchQuiz() {
    console.log(this.token);
  }
}
