import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './public/welcome/welcome.component';
import {LoginComponent} from './auth/login/login.component';
import {AdminComponent} from './admin/admin.component';
import {UnactiveQuizListComponent} from './admin/unactive-quiz-list/unactive-quiz-list.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, children: [
      {path: '', component: UnactiveQuizListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
