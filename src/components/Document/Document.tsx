import React from 'react';
import cn from 'classnames';
import makeStyles from '@material-ui/styles/makeStyles';
import type { MjBody, MjHead } from 'mrml-typings';

import type { PreviewMode } from '../../typings/preview-mode';
import type { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100vh',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    flex: 1,
    margin: theme.spacing(),
  },
  mobile: {
    maxWidth: 480,
  },
}));

export type DocumentProps = {
  className?: string;
  head: MjHead;
  previewMode: PreviewMode;
  onChange: (value: MjBody) => void;
  value: MjBody;
};

export const Document: React.FC<DocumentProps> = ({
  className,
  previewMode,
}) => {
  const classes = useStyles();

  return (
    <main className={cn(className, classes.root)}>
      <div
        className={cn(classes.container, {
          [classes.mobile]: previewMode === 'mobile',
        })}
      >
        {/* TODO */}
      </div>
    </main>
  );
};
