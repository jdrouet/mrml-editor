import * as React from 'react';
import type { Mjml } from 'mrml-typings';

export type MrmlEditorProps = {
  value: Mjml;
};

export const MrmlEditor: React.FC<MrmlEditorProps> = ({ value }) => {
  console.log({ value });
  return <div>Example Component</div>;
};
