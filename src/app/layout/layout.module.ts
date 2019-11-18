import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {LayoutComponent} from './layout.component';
import { QuizTakeComponent } from './quiz-take/quiz-take.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [LayoutComponent, QuizListComponent, QuizTakeComponent, ResultsComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LayoutModule { }
