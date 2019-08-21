import LabeledCheckboxMaterialUi from '../src/LabeledCheckboxMaterialUi';
import React from 'react';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  height: 20
};

const styles: { [key: string]: React.CSSProperties } = {
  checkbox: {
    color: '#008000'
  },
  label: {
    color: '#888888',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textDecoration: 'underline'
  }
};

const showSelectedValue = (id: string) => (checked: boolean) =>
  (document.getElementById(id).textContent = checked ? 'selected' : 'not selected');

storiesOf('LabeledCheckboxMaterialUi', module)
  .add('with label', () => (
    <div>
      <LabeledCheckboxMaterialUi label="I like it" onChange={showSelectedValue('lcbmui1')} />
      <div style={style} />
      Selected value: <span id="lcbmui1" />
    </div>
  ))
  .add('with value', () => (
    <div>
      <LabeledCheckboxMaterialUi label="I like it" value="aValue" onChange={showSelectedValue('lcbmui2')} />
      <div style={style} />
      Selected value: <span id="lcbmui2" />
    </div>
  ))
  .add('controlled', () => (
    <div>
      <LabeledCheckboxMaterialUi label="Checked" checked={true} onChange={showSelectedValue('lcbmui3')} />
      <LabeledCheckboxMaterialUi label="Unchecked" checked={false} onChange={showSelectedValue('lcbmui3')} />
      <div style={style} />
      Selected value: <span id="lcbmui3" />
    </div>
  ))
  .add('disabled', () => (
    <div>
      <LabeledCheckboxMaterialUi label="Disabled" disabled={true} onChange={showSelectedValue('lcbmui4')} />
      <div style={style} />
      Selected value: <span id="lcbmui4" />
    </div>
  ))
  .add('styled', () => (
    <div>
      <LabeledCheckboxMaterialUi
        label="Checkbox and label styled"
        styleCheckbox={styles.checkbox}
        styleLabel={styles.label}
        onChange={showSelectedValue('lcbmui5')}
      />
      <div style={style} />
      Selected value: <span id="lcbmui5" />
    </div>
  ));
