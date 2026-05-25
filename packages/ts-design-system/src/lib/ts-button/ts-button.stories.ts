import type { Meta, StoryObj } from '@storybook/angular';
import { TsButton } from './ts-button';

const meta: Meta<TsButton> = {
  title: 'Design System/TsButton',
  component: TsButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    disabled: { control: 'boolean' },
  },
  render: (args) => ({
    props: args,
    template: `<ts-button [variant]="variant" [type]="type" [disabled]="disabled">Click me</ts-button>`,
  }),
};

export default meta;
type Story = StoryObj<TsButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    type: 'button',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    disabled: true,
  },
};
