import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './home/components/main/main.component';

const routes: Routes = [
 
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/search',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: 'home'  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
