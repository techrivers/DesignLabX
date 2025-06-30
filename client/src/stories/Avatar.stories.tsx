import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup, Stack } from '@mui/material';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Avatars are found throughout material design with uses in everything from tables to dialog menus.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['circular', 'rounded', 'square'],
    },
    sx: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Avatar>
      <span className="material-icons">person</span>
    </Avatar>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Avatar
      alt="User Avatar"
      src="https://mui.com/static/images/avatar/1.jpg"
    />
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup max={4}>
      <Avatar alt="User 1" src="https://mui.com/static/images/avatar/1.jpg" />
      <Avatar alt="User 2" src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar alt="User 3" src="https://mui.com/static/images/avatar/3.jpg" />
      <Avatar alt="User 4" src="https://mui.com/static/images/avatar/4.jpg" />
      <Avatar alt="User 5" src="https://mui.com/static/images/avatar/5.jpg" />
    </AvatarGroup>
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
      <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
      <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
      <Avatar sx={{ width: 96, height: 96 }}>XL</Avatar>
    </Stack>
  ),
};

export const VariantStyles: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar variant="circular">C</Avatar>
      <Avatar variant="rounded">R</Avatar>
      <Avatar variant="square">S</Avatar>
    </Stack>
  ),
};