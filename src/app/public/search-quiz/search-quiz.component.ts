import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';
import {fetchQuizByToken} from '../../redux/player/player.actions';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-quiz',
  templateUrl: './search-quiz.component.html',
  styleUrls: ['./search-quiz.component.scss'],
})
export class SearchQuizComponent implements OnInit {

  token: string;
  quizId: String = null;
  errorMessage = null;
  constructor(private router: Router, private ngRedux: NgRedux<IAppState>, private location: Location) { }

  ngOnInit() {
  }

  handleKeydown(event) {
    this.token = event.target.value;
  }

  async searchQuiz() {
    await this.ngRedux.dispatch(fetchQuizByToken(this.token)).then((e: any) => {
      if (!e.error) {
        this.errorMessage = null;
        this.quizId = e.payload.id;
      } else {
        this.errorMessage = e.payload.response.message;
      }
    });

    if (this.quizId) {
      this.router.navigate(['/enroll/', this.quizId]);
    }
  }
}
