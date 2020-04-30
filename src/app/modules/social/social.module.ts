import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SocialRoutingModule } from './social-routing.module';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AuthModule } from './auth/auth.module';
import { SocialComponent } from './social/social.component';

@NgModule({
  imports: [
    CommonModule,
    SocialRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
  ],
  declarations: [SocialComponent],
  providers: []
})
export class SocialModule {
  constructor() {}
}
