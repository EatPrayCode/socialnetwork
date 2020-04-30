import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  {
    path: '',
    component: SocialComponent,
    children: [
      {
        path: '',
        redirectTo: 'social',
        pathMatch: 'full'
      },
      {
        path: 'social',
        loadChildren: './home/home.module#HomeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
