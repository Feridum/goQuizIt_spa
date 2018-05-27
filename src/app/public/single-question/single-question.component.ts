import { Component, OnInit } from '@angular/core';
import {IUnactiveQuiz} from '../../redux/quiz/quiz.interface';
import {NgRedux, select, select$} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {mapToArray} from '../../redux/quiz/quiz.helpers';
import {IPlayerAnswer, IPlayerQuestion} from '../../redux/player/player.interface';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAppState} from '../../redux/state.interface';
import {addPlayerAnswer, finishPlayerQuiz, setNewQuestion} from '../../redux/player/player.actions';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit {

  @select(['player', 'question']) question: Observable<IPlayerQuestion>;
  @select$(['player', 'answers'], mapToArray) answers: Observable<IPlayerAnswer[]>;


  questionId: String;
  playerId: String;
  questionForm: FormGroup;

  answerSubscription: Subscription;
  questionSubscription: Subscription;
  playerSubscription: Subscription;

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder,  private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.answerSubscription = this.answers.subscribe((answers: IPlayerAnswer[]) => {
      answers.map((answer: IPlayerAnswer) => this.addAnswer(answer.answerId, answer.value));
    });

    this.questionSubscription = this.question.subscribe( (question: IPlayerQuestion) => {
      this.questionId = question.questionId;
    } );

    this.playerSubscription = this.ngRedux.select(['player', 'playerId']).subscribe((playerId: String) => this.playerId = playerId);
  }


  createForm () {
    this.questionForm = this.fb.group({
      answers: this.fb.array([]),
      answer: ['']
    });
  }

  addAnswer(value, label) {
    const answers = this.questionForm.get('answers') as FormArray;
    answers.push(this.fb.control(false));
  }

  sendAnswer() {
    console.log('test', this.questionForm);
    const id = [
      this.questionForm.value.answer
    ];

    this.ngRedux.dispatch(addPlayerAnswer(this.playerId, this.questionId, id)).then(({payload}: any) => {
      console.log(payload);
      if (payload.isFinish) {
        this.playerSubscription.unsubscribe();
        this.answerSubscription.unsubscribe();
        this.questionSubscription.unsubscribe();
        this.ngRedux.dispatch(finishPlayerQuiz());
        this.router.navigate(['/finish']);
      } else {
        this.ngRedux.dispatch(setNewQuestion(payload));
      }
    });
  }

}
