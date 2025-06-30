import type { Meta, StoryObj } from '@storybook/react';
import { Slider, Box, Typography } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
  title: 'Input Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Sliders allow users to make selections from a range of values.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Box sx={{ width: 300 }}>
      <Slider {...args} defaultValue={30} />
    </Box>
  ),
};

export const Range: Story = {
  render: (args) => (
    <Box sx={{ width: 300 }}>
      <Slider {...args} defaultValue={[20, 37]} valueLabelDisplay="auto" />
    </Box>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Box sx={{ width: 300 }}>
      <Slider {...args} defaultValue={30} />
    </Box>
  ),
};

export const Marks: Story = {
  render: (args) => {
    const marks = [
      { value: 0, label: '0°C' },
      { value: 20, label: '20°C' },
      { value: 37, label: '37°C' },
      { value: 100, label: '100°C' },
    ];

    return (
      <Box sx={{ width: 300 }}>
        <Slider
          {...args}
          defaultValue={20}
          step={10}
          marks={marks}
          valueLabelDisplay="auto"
        />
      </Box>
    );
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <Box sx={{ height: 300 }}>
      <Slider {...args} defaultValue={30} />
    </Box>
  ),
};