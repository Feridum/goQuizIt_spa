import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './public/welcome/welcome.component';
import {LoginComponent} from './auth/login/login.component';
import {AdminComponent} from './admin/admin.component';
import {UnactiveQuizListComponent} from './admin/inactive-quiz-list/unactive-quiz-list.component';
import {QuizFormComponent} from './admin/quiz-form/quiz-form.component';
import {AuthGuardService} from './redux/auth/auth-guard.service';
import {ActiveQuizListComponent} from './admin/active-quiz-list/active-quiz-list.component';
import {FinishedQuizListComponent} from './admin/finished-quiz-list/finished-quiz-list.component';
import {QuizListComponent} from './admin/quiz-list/quiz-list.component';
import {QuestionListComponent} from './admin/question-list/question-list.component';
import {QuestionFormComponent} from './admin/question-form/question-form.component';
import {PlayerListComponent} from './admin/player-list/player-list.component';
import {SinglePlayerComponent} from './admin/single-player/single-player.component';
import {SearchQuizComponent} from './public/search-quiz/search-quiz.component';
import {PlayerFormComponent} from './public/player-form/player-form.component';
import {SingleQuestionComponent} from './public/single-question/single-question.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'search', component: SearchQuizComponent},
  {path: 'enroll/:quizId', component: PlayerFormComponent},
  {path: 'question', component: SingleQuestionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [ AuthGuardService ], children: [
      {path: '', component: QuizListComponent, children: [
          {path: '', component: UnactiveQuizListComponent},
          {path: 'active-quiz', children: [
              {path: '', component: ActiveQuizListComponent},
              {path: ':quizId/players', component: PlayerListComponent},
              {path: ':quizId/players/:playerId', component: SinglePlayerComponent},
            ]},
          {path: 'finished-quiz', children: [
              {path: '', component: FinishedQuizListComponent},
              {path: ':quizId/players', component: PlayerListComponent},
              {path: ':quizId/players/:playerId', component: SinglePlayerComponent},
              ]},
        ]},
      {path: 'add-quiz', component: QuizFormComponent},
      {path: 'edit-quiz/:quizId', component: QuizFormComponent},
      {path: 'quiz/:quizId/questions', component: QuestionListComponent},
      {path: 'quiz/:quizId/new-question', component: QuestionFormComponent},
      {path: 'quiz/:quizId/edit-question/:questionId', component: QuestionFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
