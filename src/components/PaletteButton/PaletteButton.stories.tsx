import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import HomeIcon from '@material-ui/icons/Home';
import type { Story, Meta } from '@storybook/react';

import { PaletteButton, PaletteButtonProps } from './PaletteButton';

export default {
  title: 'components/PaletteButton',
  component: PaletteButton,
} as Meta;

const Template: Story<PaletteButtonProps> = (args) => (
  <DndProvider backend={HTML5Backend}>
    <PaletteButton {...args} />
  </DndProvider>
);

export const TextElement = Template.bind({});
TextElement.args = {
  element: {
    type: 'mj-text',
  },
  icon: HomeIcon,
  name: 'text',
};
