import * as React from 'react';

export interface LabeledCheckboxMaterialUiProps extends React.Props<LabeledCheckboxMaterialUi> {
	color?: string;
	checked?: boolean;
	disabled?: boolean;
	label: string;
	onChange?: (checked: boolean) => void;
	styleCheckbox?: React.CSSProperties;
	styleLabel?: React.CSSProperties;
	value?: string;
}

declare class LabeledCheckboxMaterialUi extends React.Component<LabeledCheckboxMaterialUiProps> {}

declare module 'labeled-checkbox-material-ui' {

}

export default LabeledCheckboxMaterialUi;
