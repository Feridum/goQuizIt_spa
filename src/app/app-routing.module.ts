import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './public/welcome/welcome.component';
import {LoginComponent} from './auth/login/login.component';
import {AdminComponent} from './admin/admin.component';
import {InactiveQuizListComponent} from './admin/inactive-quiz-list/inactive-quiz-list.component';
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
import {FinishQuizComponent} from './public/finish-quiz/finish-quiz.component';
import {QuizResultComponent} from './admin/quiz-result/quiz-result.component';
import {RegisterComponent} from './auth/register/register.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {HelpComponent} from './public/help/help.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'search', component: SearchQuizComponent},
  {path: 'enroll/:quizId', component: PlayerFormComponent},
  {path: 'question', component: SingleQuestionComponent},
  {path: 'finish', component: FinishQuizComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user-reqister', component: RegisterComponent},
  {path: 'help', component: HelpComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuardService], children: [
      {
        path: '', component: QuizListComponent, children: [
          {path: '', component: InactiveQuizListComponent},
          {
            path: 'active-quiz', children: [
              {path: '', component: ActiveQuizListComponent},
              {path: ':quizId/players', component: PlayerListComponent},
              {path: ':quizId/players/:playerId', component: SinglePlayerComponent},
            ]
          },
          {
            path: 'finished-quiz', children: [
              {path: '', component: FinishedQuizListComponent},
              {path: ':quizId/results', component: QuizResultComponent},
            ]
          },
        ]
      },
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
export class AppRoutingModule {
}
