import type { Meta, StoryObj } from '@storybook/react';
import { Rating, Box, Typography } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Rating> = {
  title: 'Input Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Ratings provide insight regarding others opinions and experiences.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    precision: {
      control: { type: 'number' },
    },
    readOnly: {
      control: { type: 'boolean' },
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
    value: 4,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
  },
};

export const HalfRating: Story = {
  args: {
    value: 2.5,
    precision: 0.5,
  },
};

export const CustomIcon: Story = {
  render: (args) => (
    <Rating
      {...args}
      value={3}
      icon={<span className="material-icons">favorite</span>}
      emptyIcon={<span className="material-icons">favorite_border</span>}
    />
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(2);

    return (
      <Box>
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    );
  },
};