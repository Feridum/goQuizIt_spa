import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './public/welcome/welcome.component';
import {LoginComponent} from './auth/login/login.component';
import {AdminComponent} from './admin/admin.component';
import {UnactiveQuizListComponent} from './admin/unactive-quiz-list/unactive-quiz-list.component';
import {QuizFormComponent} from './admin/quiz-form/quiz-form.component';
import {AuthGuardService} from './redux/auth/auth-guard.service';
import {ActiveQuizListComponent} from './admin/active-quiz-list/active-quiz-list.component';
import {FinishedQuizListComponent} from './admin/finished-quiz-list/finished-quiz-list.component';
import {QuizListComponent} from './admin/quiz-list/quiz-list.component';
import {QuestionListComponent} from './admin/question-list/question-list.component';
import {QuestionFormComponent} from './admin/question-form/question-form.component';
import {PlayerListComponent} from './admin/player-list/player-list.component';
import {SinglePlayerComponent} from './admin/single-player/single-player.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [ AuthGuardService ], children: [
      {path: '', component: QuizListComponent, children: [
          {path: '', component: UnactiveQuizListComponent},
          {path: 'active-quiz', component: ActiveQuizListComponent},
          {path: 'finished-quiz', component: FinishedQuizListComponent},
          {path: 'players/:quizId', component: PlayerListComponent},
          {path: 'player/:playerId', component: SinglePlayerComponent}
        ]},
      {path: 'add-quiz', component: QuizFormComponent},
      {path: 'edit-quiz/:quizId', component: QuizFormComponent},
      {path: 'question-list/:id', component: QuestionListComponent},
      {path: 'new-question/:id', component: QuestionFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
