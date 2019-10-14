import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { authGuard } from './authGuard';
import { GetAnswerComponent } from './components/answer/get-answer/get-answer.component';
import { noAuthGuard } from './noAuthGuard';
import { NewAnswerComponent } from './components/answer/new-answer/new-answer.component';
import { PostQuestionComponent } from './components/questions/post-question/post-question.component';
import { SignupComponent } from './components/signup/signup.component';
import { GetQuestionComponent } from './components/questions/get-question/get-question.component';
import { GetAllQuestionsComponent } from './components/questions/get-all-questions/get-all-questions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {  path: 'answer', component: GetAnswerComponent, canActivate: [authGuard]},
  {  path: 'login', component: LoginComponent, canActivate:[noAuthGuard]},
  { path:'question/new', component: PostQuestionComponent, canActivate:[authGuard]},
  { path:'signup', component: SignupComponent,  canActivate:[noAuthGuard]},
  { path:'question/:questionId', component: GetQuestionComponent},
  { path:'dashboard', component: DashboardComponent,canActivate:[authGuard]},
  {  path: '**', pathMatch: 'full', component: GetAllQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
