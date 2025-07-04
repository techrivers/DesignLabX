import type { Meta, StoryObj } from '@storybook/react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

const meta: Meta<typeof Fab> = {
  title: 'MUI/Fab',
  component: Fab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['circular', 'extended'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    color: 'primary',
    children: <AddIcon />,
  },
};

export const Extended: Story = {
  args: {
    variant: 'extended',
    color: 'primary',
    children: (
      <>
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    color: 'secondary',
    children: <EditIcon />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Fab color="primary" size="small">
        <AddIcon />
      </Fab>
      <Fab color="primary" size="medium">
        <AddIcon />
      </Fab>
      <Fab color="primary" size="large">
        <AddIcon />
      </Fab>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Fab color="primary">
        <AddIcon />
      </Fab>
      <Fab color="secondary">
        <FavoriteIcon />
      </Fab>
      <Fab color="success">
        <EditIcon />
      </Fab>
      <Fab color="error">
        <NavigationIcon />
      </Fab>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    disabled: true,
    children: <AddIcon />,
  },
};