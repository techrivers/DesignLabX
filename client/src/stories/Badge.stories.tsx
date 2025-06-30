import type { Meta, StoryObj } from '@storybook/react';
import { Badge, Avatar, IconButton, Stack } from '@mui/material';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge generates a small badge to the top-right of its child(ren).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    variant: {
      control: { type: 'select' },
      options: ['standard', 'dot'],
    },
    overlap: {
      control: { type: 'select' },
      options: ['circular', 'rectangular'],
    },
    anchorOrigin: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    badgeContent: 4,
    color: 'primary',
  },
  render: (args) => (
    <Badge {...args}>
      <span className="material-icons">mail</span>
    </Badge>
  ),
};

export const Dot: Story = {
  args: {
    variant: 'dot',
    color: 'primary',
  },
  render: (args) => (
    <Badge {...args}>
      <span className="material-icons">mail</span>
    </Badge>
  ),
};

export const Custom: Story = {
  args: {
    badgeContent: 99,
    color: 'error',
  },
  render: (args) => (
    <Badge {...args}>
      <span className="material-icons">notifications</span>
    </Badge>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={4} color="primary">
        <span className="material-icons">mail</span>
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <span className="material-icons">mail</span>
      </Badge>
      <Badge badgeContent={4} color="success">
        <span className="material-icons">mail</span>
      </Badge>
      <Badge badgeContent={4} color="error">
        <span className="material-icons">mail</span>
      </Badge>
      <Badge badgeContent={4} color="warning">
        <span className="material-icons">mail</span>
      </Badge>
      <Badge badgeContent={4} color="info">
        <span className="material-icons">mail</span>
      </Badge>
    </Stack>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <Badge badgeContent={4} color="error">
      <Avatar>
        <span className="material-icons">person</span>
      </Avatar>
    </Badge>
  ),
};