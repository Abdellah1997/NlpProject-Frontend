import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SentimentComponent } from './sentiment/sentiment.component';
import { FakenewsComponent } from './fakenews/fakenews.component';
import { NlpComponent } from './nlp/nlp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SentimentComponent,
    FakenewsComponent,
    NlpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
