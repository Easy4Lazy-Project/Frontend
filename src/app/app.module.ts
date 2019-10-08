import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login/login.component';
import { GetAnswerComponent } from './components/answer/get-answer/get-answer.component';
import { NewAnswerComponent } from './components/answer/new-answer/new-answer.component';
import {MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatToolbarModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PostQuestionComponent } from './components/questions/post-question/post-question.component';
import { SignupComponent } from './components/signup/signup.component';
import { GetQuestionComponent } from './components/questions/get-question/get-question.component';
import { CommentComponent } from './components/comments/comment/comment.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/nav/navbar/navbar.component';
import { GetAllQuestionsComponent } from './components/questions/get-all-questions/get-all-questions.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetAnswerComponent,
    NewAnswerComponent,
    PostQuestionComponent,
    SignupComponent,
    GetQuestionComponent,
    CommentComponent,
    NavbarComponent,
    GetAllQuestionsComponent
  ],
  imports: [
    MatToolbarModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
