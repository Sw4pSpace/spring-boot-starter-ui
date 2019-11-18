import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {LayoutComponent} from './layout.component';
import {QuizTakeComponent} from './quiz-take/quiz-take.component';
import {ResultsComponent} from './results/results.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: QuizListComponent},
      {path: 'take', component: QuizTakeComponent},
      {path: 'results', component: ResultsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
