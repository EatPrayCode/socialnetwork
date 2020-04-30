import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesComponent } from './examples.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children:[
      {
        path: '',
        redirectTo: 'feature-list',
        pathMatch: 'full'
      },
      {
        path: 'feature-list',
        loadChildren: './../feature-list/feature-list.module#FeatureListModule'
      },
      {
        path: 'social',
        loadChildren: './../social/social.module#SocialModule'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
