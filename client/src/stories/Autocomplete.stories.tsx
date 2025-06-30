import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete, TextField, Chip, Box } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Autocomplete> = {
  title: 'Input Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The autocomplete is a normal text input enhanced by a panel of suggested options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    freeSolo: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const top100Films = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'Pulp Fiction',
  'Forrest Gump',
  'Inception',
  'The Matrix',
  'Goodfellas',
  'The Lord of the Rings',
  'Star Wars'
];

export const Basic: Story = {
  render: (args) => (
    <Autocomplete
      {...args}
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  ),
};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
  render: (args) => (
    <Autocomplete
      {...args}
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movies" />}
    />
  ),
};

export const Grouped: Story = {
  render: (args) => {
    const options = [
      { title: 'The Shawshank Redemption', year: 1994 },
      { title: 'The Godfather', year: 1972 },
      { title: 'The Dark Knight', year: 2008 },
      { title: 'Pulp Fiction', year: 1994 },
      { title: 'Forrest Gump', year: 1994 },
    ];

    return (
      <Autocomplete
        {...args}
        options={options}
        groupBy={(option) => option.year.toString()}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movies by Year" />}
      />
    );
  },
};

export const FreeSolo: Story = {
  args: {
    freeSolo: true,
  },
  render: (args) => (
    <Autocomplete
      {...args}
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Free Solo" placeholder="Type anything" />
      )}
    />
  ),
};