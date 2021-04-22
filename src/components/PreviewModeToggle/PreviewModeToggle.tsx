import React, { useCallback } from 'react';

import ComputerIcon from '@material-ui/icons/Computer';
import MobileIcon from '@material-ui/icons/Smartphone';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import type { PreviewMode } from '../../typings/preview-mode';

export type PreviewModeToggleProps = {
  onChange: (value: PreviewMode) => void;
  value: PreviewMode;
};

export const PreviewModeToggle: React.FC<PreviewModeToggleProps> = ({
  onChange,
  value,
}) => {
  const handleChange = useCallback((_event: any, value: PreviewMode) => {
    onChange(value);
  }, []);

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="preview mode"
    >
      <ToggleButton value="mobile">
        <MobileIcon />
      </ToggleButton>
      <ToggleButton value="desktop">
        <ComputerIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
