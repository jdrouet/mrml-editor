import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import type { Story, Meta } from '@storybook/react';

import { Editor, EditorProps } from './Editor';

const theme = createMuiTheme({});

export default {
  title: 'components/Editor',
  component: Editor,
} as Meta;

const Template: Story<EditorProps> = (args) => (
  <ThemeProvider theme={theme}>
    <DndProvider backend={HTML5Backend}>
      <Editor {...args} />
    </DndProvider>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  value: {
    type: 'mjml',
  },
  onChange: console.log,
};
