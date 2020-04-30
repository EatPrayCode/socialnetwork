import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Feature, features } from '../feature-list.data';

@Component({
  selector: 'neta-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureListComponent implements OnInit {
  features: Feature[] = features;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
