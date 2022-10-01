import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    SidebarComponent,  
    SearchComponent,
    ResultsComponent,
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
