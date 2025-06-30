import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardMedia, CardActions, Typography, Button } from '@mui/material';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Cards contain content and actions about a single subject.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevation', 'outlined'],
    },
    raised: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: 'elevation',
  },
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a basic card with some content to demonstrate the Material-UI Card component.
        </Typography>
      </CardContent>
    </Card>
  ),
};

export const WithMedia: Story = {
  args: {
    variant: 'elevation',
  },
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="div"
        height="140"
        sx={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Typography variant="body2" color="text.secondary">
          Image Placeholder
        </Typography>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card with Media
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This card includes a media area at the top to showcase images or other visual content.
        </Typography>
      </CardContent>
    </Card>
  ),
};

export const WithActions: Story = {
  args: {
    variant: 'elevation',
  },
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card with Actions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This card includes action buttons at the bottom for user interactions.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Outlined Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This card uses the outlined variant with a border instead of elevation.
        </Typography>
      </CardContent>
    </Card>
  ),
};
