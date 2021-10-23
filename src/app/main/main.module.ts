import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { MainComponent } from './components/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  declarations: [
    MainComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class MainModule { }
