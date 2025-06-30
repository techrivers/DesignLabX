import type { Meta, StoryObj } from '@storybook/react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Menu,
  MenuItem 
} from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof AppBar> = {
  title: 'Navigation/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'App bars display information and actions relating to the current screen.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['fixed', 'absolute', 'sticky', 'static', 'relative'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'default', 'transparent'],
    },
    elevation: {
      control: { type: 'number' },
      min: 0,
      max: 24,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: 'static',
    color: 'primary',
  },
  render: (args) => (
    <AppBar {...args}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  ),
};

export const Dense: Story = {
  args: {
    position: 'static',
    color: 'primary',
  },
  render: (args) => (
    <AppBar {...args}>
      <Toolbar variant="dense">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dense App Bar
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  ),
};

export const WithMenu: Story = {
  args: {
    position: 'static',
    color: 'primary',
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <AppBar {...args}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <span className="material-icons">menu</span>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              App with Menu
            </Typography>
            <Button
              color="inherit"
              onClick={handleClick}
            >
              Account
            </Button>
          </Toolbar>
        </AppBar>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </>
    );
  },
};

export const Elevated: Story = {
  args: {
    position: 'static',
    color: 'primary',
    elevation: 8,
  },
  render: (args) => (
    <AppBar {...args}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Elevated App Bar
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  ),
};
