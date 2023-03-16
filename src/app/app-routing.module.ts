import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservablesComponent } from './observables/observables.component';
import { OperatorsComponent } from './operators/operators.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { WhatAndWhyComponent } from './what-and-why/what-and-why.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rxjs/what-and-why', component: WhatAndWhyComponent },
  { path: 'rxjs/operators', component: OperatorsComponent },
  { path: 'rxjs/subjects', component: SubjectsComponent },
  { path: 'rxjs/observables/:value', component: ObservablesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
