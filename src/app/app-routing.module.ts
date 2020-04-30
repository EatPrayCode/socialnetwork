import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ExamplesComponent } from './modules/examples/examples.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'examples',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   component: ExamplesComponent
  // },
  {
    path: 'examples',
    loadChildren: './modules/examples/examples.module#ExamplesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
