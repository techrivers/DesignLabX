import type { Meta, StoryObj } from '@storybook/react';
import { 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  FormHelperText,
  Chip,
  Box
} from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Input Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Select components are used for collecting user provided information from a list of options.',
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => {
    const [value, setValue] = useState('');

    const handleChange = (event: any) => {
      setValue(event.target.value);
    };

    return (
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Age</InputLabel>
        <Select {...args} value={value} label="Age" onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

export const WithHelperText: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => {
    const [value, setValue] = useState('');

    const handleChange = (event: any) => {
      setValue(event.target.value);
    };

    return (
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Age</InputLabel>
        <Select {...args} value={value} label="Age" onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Please select your age</FormHelperText>
      </FormControl>
    );
  },
};

export const Error: Story = {
  args: {
    variant: 'outlined',
    error: true,
  },
  render: (args) => {
    const [value, setValue] = useState('');

    const handleChange = (event: any) => {
      setValue(event.target.value);
    };

    return (
      <FormControl sx={{ minWidth: 120 }} error>
        <InputLabel>Age</InputLabel>
        <Select {...args} value={value} label="Age" onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>This field is required</FormHelperText>
      </FormControl>
    );
  },
};

export const Multiple: Story = {
  args: {
    variant: 'outlined',
    multiple: true,
  },
  render: (args) => {
    const [value, setValue] = useState<string[]>([]);

    const handleChange = (event: any) => {
      setValue(event.target.value);
    };

    return (
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Names</InputLabel>
        <Select
          {...args}
          value={value}
          label="Names"
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {(selected as string[]).map((val) => (
                <Chip key={val} label={val} size="small" />
              ))}
            </Box>
          )}
        >
          <MenuItem value="Oliver Hansen">Oliver Hansen</MenuItem>
          <MenuItem value="Van Henry">Van Henry</MenuItem>
          <MenuItem value="April Tucker">April Tucker</MenuItem>
          <MenuItem value="Ralph Hubbard">Ralph Hubbard</MenuItem>
          <MenuItem value="Omar Alexander">Omar Alexander</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

export const Small: Story = {
  args: {
    variant: 'outlined',
    size: 'small',
  },
  render: (args) => {
    const [value, setValue] = useState('');

    const handleChange = (event: any) => {
      setValue(event.target.value);
    };

    return (
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Age</InputLabel>
        <Select {...args} value={value} label="Age" onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
  render: (args) => {
    const [value, setValue] = useState('');

    const handleChange = (event: any) => {
      setValue(event.target.value);
    };

    return (
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Age</InputLabel>
        <Select {...args} value={value} label="Age" onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  },
};
