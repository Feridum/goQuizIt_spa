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
  constructor(private router: Router, private ngRedux: NgRedux<IAppState>, private location: Location) { }

  ngOnInit() {
  }

  handleKeydown(event) {
    this.token = event.target.value;
  }

  searchQuiz() {
    this.ngRedux.dispatch(fetchQuizByToken(this.token)).then((e: any) => {
      if (!e.error) {
        this.router.navigate(['/enroll/', e.payload.id]);
      }
    });

  }
}
