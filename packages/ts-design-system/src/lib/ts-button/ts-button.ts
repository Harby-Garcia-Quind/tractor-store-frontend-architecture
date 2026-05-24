import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type TsButtonVariant = 'primary' | 'secondary';
export type TsButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'ts-button',
  imports: [],
  templateUrl: './ts-button.html',
  styleUrl: './ts-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsButton {
  variant = input<TsButtonVariant>('primary');
  type = input<TsButtonType>('button');
  disabled = input(false);
}