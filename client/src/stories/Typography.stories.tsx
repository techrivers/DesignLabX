import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Stack } from '@mui/material';

const meta: Meta<typeof Typography> = {
  title: 'Data Display/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Use typography to present your design and content as clearly and efficiently as possible.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'],
    },
    color: {
      control: { type: 'select' },
      options: ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'],
    },
    align: {
      control: { type: 'select' },
      options: ['inherit', 'left', 'center', 'right', 'justify'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Headers: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h1">h1. Heading</Typography>
      <Typography variant="h2">h2. Heading</Typography>
      <Typography variant="h3">h3. Heading</Typography>
      <Typography variant="h4">h4. Heading</Typography>
      <Typography variant="h5">h5. Heading</Typography>
      <Typography variant="h6">h6. Heading</Typography>
    </Stack>
  ),
};

export const Body: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="subtitle1">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="caption" display="block">
        caption text
      </Typography>
      <Typography variant="overline" display="block">
        overline text
      </Typography>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6" color="primary">Primary color</Typography>
      <Typography variant="h6" color="secondary">Secondary color</Typography>
      <Typography variant="h6" color="error">Error color</Typography>
      <Typography variant="h6" color="textPrimary">Text Primary</Typography>
      <Typography variant="h6" color="textSecondary">Text Secondary</Typography>
    </Stack>
  ),
};