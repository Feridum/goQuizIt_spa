import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {getQuestions} from '../../redux/question/questions.actions';
import {IQuizPlayer} from '../../redux/quiz/quiz.interface';
import {getPlayers} from '../../redux/quiz/quiz.actions';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  quizId: string;
  playersList: IQuizPlayer[];
  constructor(private ngRedux: NgRedux<IAppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.quizId = this.route.snapshot.params['quizId'];
    if (this.quizId) {
      this.ngRedux.dispatch(getPlayers(this.quizId)).then((e:any)=>{
        this.playersList = e.payload;
      });
    }
  }

}
