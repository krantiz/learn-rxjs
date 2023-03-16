import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WhatAndWhyComponent } from './what-and-why/what-and-why.component';
import { HomeComponent } from './home/home.component';
import { OperatorsComponent } from './operators/operators.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ObservablesComponent } from './observables/observables.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, AppRoutingModule],
  declarations: [
    AppComponent,
    WhatAndWhyComponent,
    HomeComponent,
    OperatorsComponent,
    SubjectsComponent,
    ObservablesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
