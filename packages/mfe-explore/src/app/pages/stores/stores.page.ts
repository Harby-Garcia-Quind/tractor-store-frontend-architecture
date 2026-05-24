import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'explore-stores',
  imports: [],
  templateUrl: './stores.page.html',
  styleUrl: './stores.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoresPage {}
