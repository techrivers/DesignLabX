import type { Meta, StoryObj } from '@storybook/react';
import { Chip, Avatar, Stack } from '@mui/material';

const meta: Meta<typeof Chip> = {
  title: 'Data Display/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Chips are compact elements that represent an input, attribute, or action.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    clickable: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Chip',
  },
};

export const Deletable: Story = {
  args: {
    label: 'Deletable',
    onDelete: () => console.log('Delete clicked'),
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable',
    onClick: () => console.log('Chip clicked'),
  },
};

export const Avatar: Story = {
  args: {
    avatar: <Avatar>M</Avatar>,
    label: 'With Avatar',
  },
};

export const ColorVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
    </Stack>
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={1} alignItems="center">
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </Stack>
  ),
};

export const VariantStyles: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Filled" variant="filled" color="primary" />
      <Chip label="Outlined" variant="outlined" color="primary" />
    </Stack>
  ),
};