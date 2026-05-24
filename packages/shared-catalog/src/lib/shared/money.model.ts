export type Currency = 'USD' | 'EUR' | 'COP';

export interface Money {
  amount: number;
  currency: Currency;
}
