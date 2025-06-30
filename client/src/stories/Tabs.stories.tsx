import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Tabs make it easy to explore and switch between different views.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: { type: 'select' },
      options: ['standard', 'scrollable', 'fullWidth'],
    },
    centered: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs {...args} value={value} onChange={handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One content
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two content
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three content
        </TabPanel>
      </Box>
    );
  },
};

export const Scrollable: Story = {
  args: {
    variant: 'scrollable',
    scrollButtons: 'auto',
  },
  render: (args) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ width: 300 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs {...args} value={value} onChange={handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One content
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two content
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three content
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four content
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five content
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six content
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven content
        </TabPanel>
      </Box>
    );
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
        <Tabs {...args} value={value} onChange={handleChange} sx={{ borderRight: 1, borderColor: 'divider' }}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One content
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two content
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three content
        </TabPanel>
      </Box>
    );
  },
};

export const Centered: Story = {
  args: {
    centered: true,
  },
  render: (args) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs {...args} value={value} onChange={handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One content
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two content
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three content
        </TabPanel>
      </Box>
    );
  },
};
