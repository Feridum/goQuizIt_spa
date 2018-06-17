import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../redux/state.interface';
import {addPlayer} from '../../redux/player/player.actions';
import {IPlayerQuizState} from '../../redux/player/player.interface';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent implements OnInit {

  playerForm: FormGroup;
  quizId: String;

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.playerForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      mail: [''],
      telephoneNumber: [''],
    });
    this.quizId = this.route.snapshot.params['quizId'];

    console.log(this.playerForm, this.quizId);
    this.ngRedux.select(['player', 'quiz']).subscribe((quiz: IPlayerQuizState) => {
      if (quiz.mailRequired) {
        this.playerForm.controls['mail'].setValidators([Validators.email, Validators.required]);
      } else if (quiz.telephoneNumberRequired) {
        this.playerForm.controls['telephoneNumber'].setValidators([Validators.required]);
      }
    }).unsubscribe();
  }


  isFieldValid(field: string) {
    return this.playerForm.get(field).invalid && this.playerForm.get(field).touched;
  }

  createPlayer() {
    this.ngRedux.dispatch(addPlayer(this.quizId, this.playerForm.value)).then((e: any) => {
      if (!e.error) {
        this.router.navigate(['/question']);
      }
    });
  }
}
