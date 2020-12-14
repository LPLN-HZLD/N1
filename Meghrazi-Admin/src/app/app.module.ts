import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from './Panel/Panel.module';
import { AuthModule } from './Auth/Auth.module';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './rotes.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PanelModule,
    RouterModule.forRoot(adminRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
