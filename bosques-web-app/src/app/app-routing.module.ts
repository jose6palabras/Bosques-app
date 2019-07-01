import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'plane',
    loadChildren: './plane/plane.module#PlaneModule'
  },
  {
    path: 'procedure',
    loadChildren:'./procedures/procedures.module#ProceduresModule'
  },
  {
    path: 'not-found',
    component:NotFoundComponent
  },
  {
    path: '**',
    redirectTo:'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
