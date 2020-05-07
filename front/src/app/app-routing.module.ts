import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './components/list/list.component';
import { pathToFileURL } from 'url';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/bases',
    pathMatch: 'full'

  },
  {
    path:'bases',
    component: ListComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
