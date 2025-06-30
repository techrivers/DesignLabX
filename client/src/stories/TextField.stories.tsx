import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@mui/material';

const meta: Meta<typeof TextField> = {
  title: 'Input Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Text fields let users enter and edit text.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    multiline: {
      control: { type: 'boolean' },
    },
    rows: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic TextField',
    variant: 'outlined',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined TextField',
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    label: 'Filled TextField',
    variant: 'filled',
  },
};

export const Standard: Story = {
  args: {
    label: 'Standard TextField',
    variant: 'standard',
  },
};

export const Error: Story = {
  args: {
    label: 'Error TextField',
    variant: 'outlined',
    error: true,
    helperText: 'This field has an error',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled TextField',
    variant: 'outlined',
    disabled: true,
  },
};

export const Multiline: Story = {
  args: {
    label: 'Multiline TextField',
    variant: 'outlined',
    multiline: true,
    rows: 4,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'TextField with Helper Text',
    variant: 'outlined',
    helperText: 'This is helper text',
  },
};

export const Small: Story = {
  args: {
    label: 'Small TextField',
    variant: 'outlined',
    size: 'small',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width TextField',
    variant: 'outlined',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};
