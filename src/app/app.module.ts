import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {NgReduxRouterModule} from '@angular-redux/router';
import {NgReduxModule} from '@angular-redux/store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from './redux/module';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './public/welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { FinishedQuizListComponent } from './admin/finished-quiz-list/finished-quiz-list.component';
import { ActiveQuizListComponent } from './admin/active-quiz-list/active-quiz-list.component';
import { UnactiveQuizListComponent } from './admin/unactive-quiz-list/unactive-quiz-list.component';
import { QuizFormComponent } from './admin/quiz-form/quiz-form.component';
import { QuestionFormComponent } from './admin/question-form/question-form.component';
import { QuestionListComponent } from './admin/question-list/question-list.component';
import {NgReduxFormModule} from '@angular-redux/form';
import {AuthGuardService} from './redux/auth/auth-guard.service';
import {AuthEpics} from './redux/auth/auth.epics';
import { QuizListComponent } from './admin/quiz-list/quiz-list.component';
import { SingleQuizListElementComponent } from './admin/single-quiz-list-element/single-quiz-list-element.component';
import { PlayerListComponent } from './admin/player-list/player-list.component';
import { SinglePlayerComponent } from './admin/single-player/single-player.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    AdminComponent,
    FinishedQuizListComponent,
    ActiveQuizListComponent,
    UnactiveQuizListComponent,
    QuizFormComponent,
    QuestionFormComponent,
    QuestionListComponent,
    QuizListComponent,
    SingleQuizListElementComponent,
    PlayerListComponent,
    SinglePlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgReduxFormModule,
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
