import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, Stack, Button } from '@mui/material';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'An alert displays a short, important message in a way that attracts the user attention without interrupting the user task.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['error', 'warning', 'info', 'success'],
    },
    variant: {
      control: { type: 'select' },
      options: ['standard', 'filled', 'outlined'],
    },
    color: {
      control: { type: 'select' },
      options: ['error', 'warning', 'info', 'success'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    severity: 'info',
    children: 'This is an info alert — check it out!',
  },
};

export const Severity: Story = {
  render: () => (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  ),
};

export const Action: Story = {
  render: () => (
    <Alert
      severity="info"
      action={
        <Button color="inherit" size="small">
          UNDO
        </Button>
      }
    >
      This is an info alert with an action!
    </Alert>
  ),
};

export const Filled: Story = {
  render: () => (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert with a title — <strong>check it out!</strong>
    </Alert>
  ),
};