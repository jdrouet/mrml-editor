import cn from 'classnames';
import type { MjImage, MjText } from 'mrml-typings';
import React from 'react';

import type { Theme } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import TextIcon from '@material-ui/icons/Title';
import makeStyles from '@material-ui/styles/makeStyles';

import type { PreviewMode } from '../../typings/preview-mode';
import { PaletteButton } from '../PaletteButton';
import { PreviewModeToggle } from '../PreviewModeToggle';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    maxWidth: 250 - theme.spacing(4),
  },
}));

const IMAGE_ELEMENT: MjImage = {
  type: 'mj-image',
};
const TEXT_ELEMENT: MjText = {
  type: 'mj-text',
};

export type SidebarProps = {
  className?: string;
  anchor: 'left' | 'right';
  previewMode: PreviewMode;
  onChangePreviewMode: (value: PreviewMode) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({
  className,
  anchor = 'left',
  previewMode,
  onChangePreviewMode,
}) => {
  const classes = useStyle();

  return (
    <Drawer anchor={anchor} open variant="permanent">
      <div className={cn(className, classes.root)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="overline">Preview Mode</Typography>
          </Grid>
          <Grid item xs={12}>
            <PreviewModeToggle
              onChange={onChangePreviewMode}
              value={previewMode}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">Elements</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <PaletteButton element={TEXT_ELEMENT} name="Text" icon={TextIcon} />
          </Grid>
          <Grid item xs={12} md={6}>
            <PaletteButton
              element={IMAGE_ELEMENT}
              name="Image"
              icon={ImageIcon}
            />
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};
