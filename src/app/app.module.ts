import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgReduxRouterModule} from '@angular-redux/router';
import {NgReduxModule} from '@angular-redux/store';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from './redux/module';
import {LoginComponent} from './auth/login/login.component';
import {WelcomeComponent} from './public/welcome/welcome.component';
import {AdminComponent} from './admin/admin.component';
import {FinishedQuizListComponent} from './admin/finished-quiz-list/finished-quiz-list.component';
import {ActiveQuizListComponent} from './admin/active-quiz-list/active-quiz-list.component';
import {InactiveQuizListComponent} from './admin/inactive-quiz-list/inactive-quiz-list.component';
import {QuizFormComponent} from './admin/quiz-form/quiz-form.component';
import {QuestionFormComponent} from './admin/question-form/question-form.component';
import {QuestionListComponent} from './admin/question-list/question-list.component';
import {NgReduxFormModule} from '@angular-redux/form';
import {AuthGuardService} from './redux/auth/auth-guard.service';
import {QuizListComponent} from './admin/quiz-list/quiz-list.component';
import {SingleQuizListElementComponent} from './admin/single-quiz-list-element/single-quiz-list-element.component';
import {PlayerListComponent} from './admin/player-list/player-list.component';
import {SinglePlayerComponent} from './admin/single-player/single-player.component';
import {SearchQuizComponent} from './public/search-quiz/search-quiz.component';
import {PlayerFormComponent} from './public/player-form/player-form.component';
import {SingleQuestionComponent} from './public/single-question/single-question.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {HeaderBarComponent} from './common-elements/header-bar/header-bar.component';
import {FooterBarComponent} from './common-elements/footer-bar/footer-bar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BackToTopComponent} from './common-elements/back-to-top/back-to-top.component';
import {CenterFormComponent} from './common-elements/center-form/center-form.component';
import {FinishQuizComponent} from './public/finish-quiz/finish-quiz.component';
import {QuizResultComponent} from './admin/quiz-result/quiz-result.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    AdminComponent,
    FinishedQuizListComponent,
    ActiveQuizListComponent,
    InactiveQuizListComponent,
    QuizFormComponent,
    QuestionFormComponent,
    QuestionListComponent,
    QuizListComponent,
    SingleQuizListElementComponent,
    PlayerListComponent,
    SinglePlayerComponent,
    SearchQuizComponent,
    PlayerFormComponent,
    SingleQuestionComponent,
    FinishQuizComponent,
    QuizResultComponent,
    HeaderBarComponent,
    FooterBarComponent,
    BackToTopComponent,
    CenterFormComponent,
    RegisterComponent,
    ForgotPasswordComponent,
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
    ScrollToModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
