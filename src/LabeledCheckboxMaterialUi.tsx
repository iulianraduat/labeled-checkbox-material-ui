import * as React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { isEmpty } from 'lodash';

const styles: { [key: string]: React.CSSProperties } = {
	checkbox: {
		padding: '0 5px 0 0'
	},
	label: {
		marginRight: 0,
		whiteSpace: 'nowrap'
	}
};

class LabeledCheckboxMaterialUi extends React.PureComponent<LabeledCheckboxMaterialUiProps> {
	public render() {
		return (
			<FormControlLabel
				control={this.getCheckbox()}
				disabled={this.props.disabled}
				label={this.props.label}
				style={this.getStyleLabel()}
			/>
		);
	}

	private getCheckbox() {
		const { color, checked, disabled, label, value } = this.props;
		const cbColor: string | any = isEmpty(color) ? 'primary' : color as string;
		const cbValue: string = isEmpty(value) ? label : value as string;

		return (
			<Checkbox
				checked={checked}
				color={cbColor}
				disabled={disabled}
				onChange={this.handleChange}
				value={cbValue}
				style={this.getStyleCheckbox()}
			/>
		);
	}

	private getStyleLabel() {
		const { styleLabel } = this.props;

		if (isEmpty(styleLabel)) {
			return styles.label;
		}

		return {
			...styles.label,
			styleLabel
		};
	}

	private getStyleCheckbox() {
		const { styleCheckbox } = this.props;

		if (isEmpty(styleCheckbox)) {
			return styles.checkbox;
		}

		return {
			...styles.checkbox,
			styleCheckbox
		};
	}

	private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => this.props.onChange(event.target.checked);
}

interface LabeledCheckboxMaterialUiProps {
	color?: string;
	checked?: boolean;
	disabled?: boolean;
	label: string;
	onChange: (checked: boolean) => void;
	styleCheckbox?: React.CSSProperties;
	styleLabel?: React.CSSProperties;
	value?: string;
}

export default LabeledCheckboxMaterialUi;
