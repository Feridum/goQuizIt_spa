import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgRedux, select, select$} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {mapToArray} from '../../redux/quiz/quiz.helpers';
import {IPlayerAnswer, IPlayerQuestion, IPlayerState} from '../../redux/player/player.interface';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {IAppState} from '../../redux/state.interface';
import {addPlayerAnswer, addPlayerOpenAnswer, setNewQuestion} from '../../redux/player/player.actions';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit, OnDestroy {

  @select(['player']) player: Observable<IPlayerState>;
  @select(['player', 'question']) question: Observable<IPlayerQuestion>;
  @select$(['player', 'answers'], mapToArray) answers: Observable<IPlayerAnswer[]>;

  questionIndex: number;
  numberOfQuestions: number;
  questionId: String;
  questionType: string;
  playerId: String;
  questionForm: FormGroup;

  answerSubscription: Subscription;
  questionSubscription: Subscription;
  playerSubscription: Subscription;

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {

    this.questionSubscription = this.question.subscribe((question: IPlayerQuestion) => {
      this.questionId = question.questionId;
      this.questionType = question.type;
      this.createForm();
    });

    this.answerSubscription = this.answers.subscribe((answers: IPlayerAnswer[]) => {
      answers.map((answer: IPlayerAnswer) => this.addAnswer(answer.answerId, answer.value));
    });

    this.playerSubscription = this.player.subscribe((player: IPlayerState) => {
      this.playerId = player.playerId;
      this.questionIndex = player.questionIndex;
      this.numberOfQuestions = player.numberOfQuestions;
    });
  }

  createForm() {
    this.questionForm = this.fb.group({
      answers: this.fb.array([]),
      answer: ['']
    });
  }

  addAnswer(value, label) {
    const answers = this.questionForm.get('answers') as FormArray;
    answers.push(this.fb.group({
      value: value,
      label: label,
      checked: false
    }));
  }

  sendAnswer() {
    let id = [];
    let postPlayerAnswer = addPlayerAnswer;
    if (this.questionType === 'MULTIPLE_CHOICE') {
      id = this.questionForm.value.answers.map(answer => answer.checked && answer.value).filter(Boolean);
    } else {
      id = [
        this.questionForm.value.answer
      ];
    }

    if (this.questionType === 'OPEN') {
      postPlayerAnswer = addPlayerOpenAnswer;
    }

    this.ngRedux.dispatch(postPlayerAnswer(this.playerId, this.questionId, id)).then((response: any) => {
      console.log(response.payload);
      if (response.payload.isFinish) {
        this.router.navigate(['/finish']);
      } else if (!response.error) {
        this.ngRedux.dispatch(setNewQuestion(response.payload));
      }
    });
  }

  ngOnDestroy() {
    this.playerSubscription.unsubscribe();
    this.answerSubscription.unsubscribe();
    this.questionSubscription.unsubscribe();
  }
}
