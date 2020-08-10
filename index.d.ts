import * as React from 'react';

export interface LabeledCheckboxMaterialUiProps extends React.Props<LabeledCheckboxMaterialUi> {
  checked?: boolean;
  classNameCheckbox?: string;
  classNameLabel?: string;
  color?: string;
  disabled?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
  styleCheckbox?: React.CSSProperties;
  styleLabel?: React.CSSProperties;
  value?: string;
}

declare class LabeledCheckboxMaterialUi extends React.Component<LabeledCheckboxMaterialUiProps> {}

declare module 'labeled-checkbox-material-ui' {}

export default LabeledCheckboxMaterialUi;
