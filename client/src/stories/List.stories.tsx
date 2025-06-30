import type { Meta, StoryObj } from '@storybook/react';
import { 
  List, 
  ListItem, 
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Switch,
  Checkbox,
  IconButton
} from '@mui/material';

const meta: Meta<typeof List> = {
  title: 'Data Display/List',
  component: List,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Lists are continuous, vertical indexes of text or images.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    dense: {
      control: { type: 'boolean' },
    },
    disablePadding: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <List {...args} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <List {...args} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemIcon>
          <span className="material-icons">inbox</span>
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <span className="material-icons">drafts</span>
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <span className="material-icons">send</span>
        </ListItemIcon>
        <ListItemText primary="Sent" />
      </ListItem>
    </List>
  ),
};

export const WithAvatars: Story = {
  render: (args) => (
    <List {...args} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <span className="material-icons">person</span>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="John Doe" secondary="Software Engineer" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <span className="material-icons">person</span>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Jane Smith" secondary="Product Manager" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <span className="material-icons">person</span>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mike Johnson" secondary="Designer" />
      </ListItem>
    </List>
  ),
};

export const Interactive: Story = {
  render: (args) => (
    <List {...args} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItemButton>
        <ListItemIcon>
          <span className="material-icons">inbox</span>
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <span className="material-icons">drafts</span>
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <span className="material-icons">send</span>
        </ListItemIcon>
        <ListItemText primary="Sent" />
      </ListItemButton>
    </List>
  ),
};

export const WithDividers: Story = {
  render: (args) => (
    <List {...args} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="Inbox" secondary="Unread messages" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Drafts" secondary="Saved drafts" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Sent" secondary="Sent messages" />
      </ListItem>
    </List>
  ),
};

export const WithControls: Story = {
  render: (args) => (
    <List {...args} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem
        secondaryAction={
          <Switch edge="end" />
        }
      >
        <ListItemIcon>
          <span className="material-icons">wifi</span>
        </ListItemIcon>
        <ListItemText primary="Wi-Fi" />
      </ListItem>
      <ListItem
        secondaryAction={
          <Switch edge="end" defaultChecked />
        }
      >
        <ListItemIcon>
          <span className="material-icons">bluetooth</span>
        </ListItemIcon>
        <ListItemText primary="Bluetooth" />
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton edge="end">
            <span className="material-icons">delete</span>
          </IconButton>
        }
      >
        <ListItemIcon>
          <span className="material-icons">folder</span>
        </ListItemIcon>
        <ListItemText primary="Documents" />
      </ListItem>
    </List>
  ),
};

export const Dense: Story = {
  args: {
    dense: true,
  },
  render: (args) => (
    <List {...args} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemIcon>
          <span className="material-icons">inbox</span>
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <span className="material-icons">drafts</span>
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <span className="material-icons">send</span>
        </ListItemIcon>
        <ListItemText primary="Sent" />
      </ListItem>
    </List>
  ),
};
