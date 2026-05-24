import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TsButton } from 'ts-design-system';

@Component({
  selector: 'checkout-thanks-page',
  imports: [TsButton],
  templateUrl: './thanks.page.html',
  styleUrl: './thanks.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThanksPage {}
