import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useMemo } from 'react';
import { useDrag } from 'react-dnd';
import type { MjBodyChild } from 'mrml-typings';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(),
    paddingTop: theme.spacing(2),
    textAlign: 'center',
  },
  icon: {
    height: '1.6em',
    width: '1.6em',
  },
}));

export type PaletteButtonProps = {
  element: MjBodyChild;
  icon: React.FC<{ className?: string }>;
  name: string;
};

export const PaletteButton: React.FC<PaletteButtonProps> = ({
  element,
  icon: Icon,
  name,
}) => {
  const classes = useStyles();

  const [collected, dragRef] = useDrag({
    type: typeof element === 'string' ? 'text' : element.type,
    item: element,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const style = useMemo(
    () => ({
      opacity: collected.isDragging ? 0.4 : 1,
    }),
    [collected.isDragging],
  );

  return (
    <Card
      innerRef={dragRef}
      className={classes.root}
      style={style}
      variant="outlined"
    >
      <Icon className={classes.icon} />
      <Typography component="div" variant="caption">
        {name}
      </Typography>
    </Card>
  );
};
