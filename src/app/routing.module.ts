import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {QuizComponent} from './quiz/quiz.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}