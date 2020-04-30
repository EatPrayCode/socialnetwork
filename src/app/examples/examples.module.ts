import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';

@NgModule({
  imports: [
    ExamplesRoutingModule,
    CommonModule,
  ],
  declarations: [
    ExamplesComponent
  ],
  providers: []
})
export class ExamplesModule {
  constructor() {}
}
