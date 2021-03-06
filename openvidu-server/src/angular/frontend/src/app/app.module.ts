import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing } from './app.routing';
import { AppMaterialModule } from 'app/app.material.module';

import { InfoService } from './services/info.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SessionDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AppMaterialModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
