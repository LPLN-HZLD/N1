import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { authRoutes } from './rotes.routing';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(authRoutes)
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent]
})
export class AuthModule { }
