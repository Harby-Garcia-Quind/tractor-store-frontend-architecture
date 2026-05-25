import type { Meta, StoryObj } from '@storybook/angular';
import { action } from 'storybook/actions';
import type { ProductSummary } from 'shared-catalog';
import { TsProductCard } from './ts-product-card';

const mockProduct: ProductSummary = {
  id: 'product-001',
  name: 'Compact Utility Tractor X200',
  brand: 'AgriPower',
  category: 'Utility Tractors',
  basePrice: { amount: 24999, currency: 'USD' },
  primaryImageUrl: 'https://placehold.co/400x300?text=Tractor+X200',
};

const meta: Meta<TsProductCard> = {
  title: 'Design System/TsProductCard',
  component: TsProductCard,
  tags: ['autodocs'],
  argTypes: {
    selected: { action: 'selected' },
  },
  render: (args) => ({
    props: {
      ...args,
      selected: action('selected'),
    },
    template: `<ts-product-card [product]="product" (selected)="selected($event)"></ts-product-card>`,
  }),
};

export default meta;
type Story = StoryObj<TsProductCard>;

export const Default: Story = {
  args: {
    product: mockProduct,
  },
};

export const LowPriceProduct: Story = {
  args: {
    product: {
      ...mockProduct,
      id: 'product-002',
      name: 'Mini Garden Tractor G100',
      brand: 'GreenField',
      category: 'Garden Tractors',
      basePrice: { amount: 7499, currency: 'USD' },
      primaryImageUrl: 'https://placehold.co/400x300?text=Garden+G100',
    },
  },
};

export const EuropeanCurrency: Story = {
  args: {
    product: {
      ...mockProduct,
      id: 'product-003',
      name: 'Heavy Duty Field Tractor H500',
      brand: 'EuroFarm',
      category: 'Field Tractors',
      basePrice: { amount: 52000, currency: 'EUR' },
      primaryImageUrl: 'https://placehold.co/400x300?text=Field+H500',
    },
  },
};
