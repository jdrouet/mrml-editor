import React from 'react';
import { Story, Meta } from '@storybook/react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Sidebar, SidebarProps } from './Sidebar';

const theme = createMuiTheme({});

export default {
  title: 'components/Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => (
  <ThemeProvider theme={theme}>
    <DndProvider backend={HTML5Backend}>
      <Sidebar {...args} />
    </DndProvider>
  </ThemeProvider>
);

export const SidebarDefault = Template.bind({});
SidebarDefault.args = {
  open: true,
};
SidebarDefault.argTypes = {
  open: {
    control: {
      type: 'boolean',
    },
  },
};
