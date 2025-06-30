import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Accordion> = {
  title: 'Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Accordions contain creation flows and allow lightweight editing of an element.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    expanded: {
      control: { type: 'boolean' },
    },
    square: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <div>
      <Accordion {...args}>
        <AccordionSummary expandIcon={<span className="material-icons">expand_more</span>}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion {...args}>
        <AccordionSummary expandIcon={<span className="material-icons">expand_more</span>}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<span className="material-icons">expand_more</span>}>
            <Typography>General settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<span className="material-icons">expand_more</span>}>
            <Typography>Users</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  },
};

export const Detailed: Story = {
  render: () => (
    <Accordion>
      <AccordionSummary expandIcon={<span className="material-icons">expand_more</span>}>
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          General settings
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
          maximus est, id dignissim quam. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia Curae; Proin vel ante a orci tempus eleifend ut et magna.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </AccordionDetails>
    </Accordion>
  ),
};