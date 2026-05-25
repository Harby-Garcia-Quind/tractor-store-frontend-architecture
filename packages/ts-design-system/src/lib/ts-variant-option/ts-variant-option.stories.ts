import type { Meta, StoryObj } from '@storybook/angular';
import { action } from 'storybook/actions';
import type { Variant } from 'shared-catalog';
import { TsVariantOption } from './ts-variant-option';

const mockVariant: Variant = {
  id: 'variant-001',
  productId: 'product-001',
  name: 'Standard 4WD',
  sku: 'TX200-4WD-RED',
  color: 'Red',
  engine: '24HP Diesel',
  price: { amount: 24999, currency: 'USD' },
  stock: 5,
};

const outOfStockVariant: Variant = {
  id: 'variant-002',
  productId: 'product-001',
  name: 'Premium 4WD',
  sku: 'TX200-4WD-BLU',
  color: 'Blue',
  engine: '30HP Diesel',
  price: { amount: 29999, currency: 'USD' },
  stock: 0,
};

const meta: Meta<TsVariantOption> = {
  title: 'Design System/TsVariantOption',
  component: TsVariantOption,
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'boolean' },
    variantSelected: { action: 'variantSelected' },
  },
  render: (args) => ({
    props: {
      ...args,
      variantSelected: action('variantSelected'),
    },
    template: `<ts-variant-option [variant]="variant" [selected]="selected" (variantSelected)="variantSelected($event)"></ts-variant-option>`,
  }),
};

export default meta;
type Story = StoryObj<TsVariantOption>;

export const Default: Story = {
  args: {
    variant: mockVariant,
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    variant: mockVariant,
    selected: true,
  },
};

export const OutOfStock: Story = {
  args: {
    variant: outOfStockVariant,
    selected: false,
  },
};

export const OutOfStockSelected: Story = {
  args: {
    variant: outOfStockVariant,
    selected: true,
  },
};
