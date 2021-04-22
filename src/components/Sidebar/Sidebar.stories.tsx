import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Story, Meta } from '@storybook/react';

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
