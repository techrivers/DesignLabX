import type { Meta, StoryObj } from '@storybook/react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Box
} from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  title: 'Navigation/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Drawers provide access to destinations in your app.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    anchor: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
    },
    variant: {
      control: { type: 'select' },
      options: ['permanent', 'persistent', 'temporary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const DrawerContent = () => (
  <Box sx={{ width: 250 }} role="presentation">
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <span className="material-icons">
                {index % 2 === 0 ? 'inbox' : 'mail'}
              </span>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <span className="material-icons">
                {index % 2 === 0 ? 'inbox' : 'mail'}
              </span>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export const Temporary: Story = {
  args: {
    anchor: 'left',
    variant: 'temporary',
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
      setOpen(!open);
    };

    return (
      <div>
        <Button onClick={toggleDrawer}>Open Drawer</Button>
        <Drawer
          {...args}
          open={open}
          onClose={toggleDrawer}
        >
          <DrawerContent />
        </Drawer>
      </div>
    );
  },
};

export const Permanent: Story = {
  args: {
    anchor: 'left',
    variant: 'permanent',
  },
  render: (args) => (
    <Box sx={{ display: 'flex' }}>
      <Drawer {...args}>
        <DrawerContent />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h2>Main Content</h2>
        <p>This is the main content area. The drawer is permanently visible.</p>
      </Box>
    </Box>
  ),
};

export const RightAnchor: Story = {
  args: {
    anchor: 'right',
    variant: 'temporary',
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
      setOpen(!open);
    };

    return (
      <div>
        <Button onClick={toggleDrawer}>Open Right Drawer</Button>
        <Drawer
          {...args}
          open={open}
          onClose={toggleDrawer}
        >
          <DrawerContent />
        </Drawer>
      </div>
    );
  },
};
