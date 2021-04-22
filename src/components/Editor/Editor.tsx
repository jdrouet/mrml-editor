import React from 'react';
import type { Mjml, MjHead, MjBody } from 'mrml-typings';
import makeStyles from '@material-ui/styles/makeStyles';

import { Document } from '../Document';
import { Sidebar } from '../Sidebar';
import type { PreviewMode } from '../../typings/preview-mode';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  sidebar: {
    width: 250,
  },
  container: {
    marginLeft: 250,
  },
}));

export type EditorProps = {
  onChange: (updated: Mjml) => void;
  value: Mjml;
};

const DEFAULT_HEAD: MjHead = { type: 'mj-head' };
const DEFAULT_BODY: MjBody = { type: 'mj-body' };

export const Editor: React.FC<EditorProps> = ({ onChange, value }) => {
  const classes = useStyles();
  const [previewMode, setPreviewMode] = React.useState<PreviewMode>('desktop');

  const head: MjHead = React.useMemo(() => {
    const found = value.children?.find((item) => item.type === 'mj-head') as
      | MjHead
      | undefined;
    return found ?? DEFAULT_HEAD;
  }, [value]);

  const body: MjBody = React.useMemo(() => {
    const found = value.children?.find((item) => item.type === 'mj-body') as
      | MjBody
      | undefined;
    return found ?? DEFAULT_BODY;
  }, [value]);

  const handleChangeBody = React.useCallback(
    (body: MjBody) => {
      onChange({
        ...value,
        children: [head, body],
      });
    },
    [value, head, onChange],
  );

  return (
    <div className={classes.root}>
      <Sidebar
        className={classes.sidebar}
        anchor='left'
        previewMode={previewMode}
        onChangePreviewMode={setPreviewMode}
      />
      <Document
        className={classes.container}
        head={head}
        previewMode={previewMode}
        onChange={handleChangeBody}
        value={body}
      />
    </div>
  );
};
