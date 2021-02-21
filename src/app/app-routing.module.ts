import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SentimentComponent } from './sentiment/sentiment.component';
import { FakenewsComponent } from './fakenews/fakenews.component';
import { NlpComponent } from './nlp/nlp.component';

const routes: Routes = [
  { path: 'sentiment', component: SentimentComponent },
  { path: 'fakenews', component: FakenewsComponent },
  { path: '', component: NlpComponent },
  { path: 'nlp', component: NlpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
