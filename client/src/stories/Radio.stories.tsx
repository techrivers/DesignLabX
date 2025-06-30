import type { Meta, StoryObj } from '@storybook/react';
import { 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl, 
  FormLabel 
} from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Radio> = {
  title: 'Input Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Radio buttons allow the user to select one option from a set.',
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
    <FormControlLabel control={<Radio {...args} />} label="Radio Button" />
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <FormControlLabel control={<Radio {...args} />} label="Disabled" />
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Color Variants</FormLabel>
      <RadioGroup>
        <FormControlLabel control={<Radio color="primary" />} label="Primary" />
        <FormControlLabel control={<Radio color="secondary" />} label="Secondary" />
        <FormControlLabel control={<Radio color="success" />} label="Success" />
        <FormControlLabel control={<Radio color="error" />} label="Error" />
        <FormControlLabel control={<Radio color="warning" />} label="Warning" />
        <FormControlLabel control={<Radio color="info" />} label="Info" />
      </RadioGroup>
    </FormControl>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <FormControl>
        <FormLabel>Controlled Radio Group</FormLabel>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
        </RadioGroup>
      </FormControl>
    );
  },
};