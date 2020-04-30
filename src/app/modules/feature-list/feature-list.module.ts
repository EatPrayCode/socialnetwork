import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureListRoutingModule } from './feature-list-routing.module';

@NgModule({
  declarations: [FeatureListComponent],
  imports: [CommonModule, FeatureListRoutingModule]
})
export class FeatureListModule {}
