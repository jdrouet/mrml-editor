import React from 'react';
import type { Theme } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import TextIcon from '@material-ui/icons/Title';
import type { MjImage, MjText } from 'mrml-typings';

import { PaletteButton } from '../PaletteButton';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const IMAGE_ELEMENT: MjImage = {
  type: 'mj-image',
};
const TEXT_ELEMENT: MjText = {
  type: 'mj-text',
};

export type SidebarProps = {
  anchor: 'left' | 'right';
  open: DrawerProps['open'];
  variant: DrawerProps['variant'];
};

export const Sidebar: React.FC<SidebarProps> = ({
  anchor = 'left',
  open,
  variant,
}) => {
  const classes = useStyle();

  return (
    <Drawer anchor={anchor} open={open} variant={variant}>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant='overline'>Elements</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <PaletteButton element={TEXT_ELEMENT} name='Text' icon={TextIcon} />
          </Grid>
          <Grid item xs={12} md={6}>
            <PaletteButton
              element={IMAGE_ELEMENT}
              name='Image'
              icon={ImageIcon}
            />
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};
