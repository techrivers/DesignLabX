import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Input Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Checkboxes allow the user to select one or more items from a set.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    color: 'primary',
  },
};

export const WithLabel: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => (
    <FormControlLabel control={<Checkbox {...args} />} label="Check me" />
  ),
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    disabled: true,
  },
  render: (args) => (
    <FormControlLabel control={<Checkbox {...args} />} label="Disabled" />
  ),
};

export const Indeterminate: Story = {
  args: {
    color: 'primary',
    indeterminate: true,
  },
  render: (args) => (
    <FormControlLabel control={<Checkbox {...args} />} label="Indeterminate" />
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Checkbox color="primary" />} label="Primary" />
      <FormControlLabel control={<Checkbox color="secondary" />} label="Secondary" />
      <FormControlLabel control={<Checkbox color="success" />} label="Success" />
      <FormControlLabel control={<Checkbox color="error" />} label="Error" />
      <FormControlLabel control={<Checkbox color="warning" />} label="Warning" />
      <FormControlLabel control={<Checkbox color="info" />} label="Info" />
    </FormGroup>
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Checkbox size="small" />} label="Small" />
      <FormControlLabel control={<Checkbox size="medium" />} label="Medium" />
    </FormGroup>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    return (
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label="Controlled Checkbox"
      />
    );
  },
};
