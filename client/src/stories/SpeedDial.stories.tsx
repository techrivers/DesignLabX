import type { Meta, StoryObj } from '@storybook/react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { Edit, Save, Share, Print, FileCopy, ContentCopy } from '@mui/icons-material';

const meta = {
  title: 'Material UI/SpeedDial',
  component: SpeedDial,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SpeedDial>;

export default meta;
type Story = StoryObj<typeof meta>;

const actions = [
  { icon: <FileCopy />, name: 'Copy' },
  { icon: <Save />, name: 'Save' },
  { icon: <Print />, name: 'Print' },
  { icon: <Share />, name: 'Share' },
];

export const Basic: Story = {
  args: {
    ariaLabel: 'SpeedDial basic example',
    sx: { position: 'absolute', bottom: 16, right: 16 },
    icon: <SpeedDialIcon />,
    children: actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
      />
    )),
  },
};

export const WithEditIcon: Story = {
  args: {
    ariaLabel: 'SpeedDial with edit icon',
    sx: { position: 'absolute', bottom: 16, right: 16 },
    icon: <SpeedDialIcon icon={<Edit />} />,
    children: actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
      />
    )),
  },
};

export const DirectionUp: Story = {
  args: {
    ariaLabel: 'SpeedDial direction up',
    sx: { position: 'absolute', bottom: 16, right: 16 },
    icon: <SpeedDialIcon />,
    direction: 'up',
    children: actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
      />
    )),
  },
};

export const DirectionLeft: Story = {
  args: {
    ariaLabel: 'SpeedDial direction left',
    sx: { position: 'absolute', bottom: 16, right: 16 },
    icon: <SpeedDialIcon />,
    direction: 'left',
    children: actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
      />
    )),
  },
};

export const Persistent: Story = {
  args: {
    ariaLabel: 'SpeedDial persistent',
    sx: { position: 'absolute', bottom: 16, right: 16 },
    icon: <SpeedDialIcon />,
    open: true,
    children: actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
      />
    )),
  },
};

export const CustomIcon: Story = {
  args: {
    ariaLabel: 'SpeedDial custom icon',
    sx: { position: 'absolute', bottom: 16, right: 16 },
    icon: <ContentCopy />,
    children: actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
      />
    )),
  },
};