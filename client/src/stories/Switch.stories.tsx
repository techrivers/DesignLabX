import type { Meta, StoryObj } from '@storybook/react';
import { Switch, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Switch> = {
  title: 'Input Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Switches toggle the state of a single setting on or off.',
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
  render: (args) => (
    <FormControlLabel control={<Switch {...args} />} label="Switch Label" />
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <FormControlLabel control={<Switch {...args} />} label="Disabled" />
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Switch color="primary" />} label="Primary" />
      <FormControlLabel control={<Switch color="secondary" />} label="Secondary" />
      <FormControlLabel control={<Switch color="success" />} label="Success" />
      <FormControlLabel control={<Switch color="error" />} label="Error" />
      <FormControlLabel control={<Switch color="warning" />} label="Warning" />
      <FormControlLabel control={<Switch color="info" />} label="Info" />
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
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Controlled Switch"
      />
    );
  },
};