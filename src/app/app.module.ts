import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoutingModule} from './routing.module';
import {HttpClientModule} from '@angular/common/http';
import {QuizComponent} from './quiz/quiz.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
