import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TsButton } from 'ts-design-system';

@Component({
  selector: 'checkout-checkout-page',
  imports: [ReactiveFormsModule, TsButton],
  templateUrl: './checkout.page.html',
  styleUrl: './checkout.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutPage {
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);
  private submitted = false;

  form = new FormGroup({
    fullName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    address: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    city: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    country: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  get isFormDirtyAndNotSubmitted(): boolean {
    return this.form.dirty && !this.submitted;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted = true;
      this.router.navigate(['/thanks']);
    } else {
      this.form.markAllAsTouched();
      this.cdr.markForCheck();
    }
  }
}
