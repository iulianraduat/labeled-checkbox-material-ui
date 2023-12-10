# labeled-checkbox-material-ui ![Weekly downloads](https://img.shields.io/npm/dw/labeled-checkbox-material-ui 'Weekly downloads')

A material-ui component which combines a checkbox and a label in a single component

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/labeled-checkbox-material-ui/).

## Props

The component accepts the props defined bellow in the table.

### Props accepted by LabeledCheckboxMaterialUi

| Name              | Type                       | Required | Default   | Description                                                     |
| ----------------- | -------------------------- | -------- | --------- | --------------------------------------------------------------- |
| checked           | boolean                    | no       | false     | If true, the checkbox is selected                               |
| classNameCheckbox | string                     | no       | undefined | The className applied to the checkbox                           |
| classNameLabel    | string                     | no       | undefined | The className applied to the label                              |
| color             | string                     | no       | primary   | The color of the checkbox                                       |
| disabled          | boolean                    | no       | false     | The component is disabled                                       |
| label             | string                     | yes      | -         | The label of the checkbox                                       |
| onChange          | (checked: boolean) => void | no       | undefined | The callback function called when the checkbox value is changed |
| styleCheckbox     | CSSProperties              | no       | undefined | The style applied to the checkbox                               |
| styleLabel        | CSSProperties              | no       | undefined | The style applied to the label                                  |
| value             | string                     | no       | undefined | The value of the checkbox                                       |

---

## Versions

| LabeledCheckboxMaterialUi _uses_ | Material-ui |      React       |
| -------------------------------: | :---------: | :--------------: |
|                            1.0.x |    3.6.0    |      16.6.3      |
|                            1.1.x |    3.9.1    |      16.8.1      |
|                            1.2.x |    3.9.3    |      16.8.6      |
|                            2.0.x |    4.0.2    |      16.8.6      |
|                            2.1.x |    4.2.0    |      16.8.6      |
|                            2.2.x |    4.3.2    |      16.9.0      |
|                            2.3.x |    4.9.0    |      16.9.0      |
|                            2.4.x |    4.9.7    |      16.9.0      |
|                            2.5.x |   4.10.2    |      16.9.0      |
|                            2.6.x |   4.11.0    |      16.9.0      |
|                            2.7.x |   4.11.3    | 16.9.0 or 17.0.0 |
|                            3.0.x |   5.10.17   |      18.0.0      |
|                            3.1.x |   5.14.20   |      18.0.0      |

### About versioning schema used for LabeledCheckboxMaterialUi

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of LabeledCheckboxMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of LabeledCheckboxMaterialUi

---

## Example

The base component which allows to create read-only or creatable select components for selecting only one or more values:

```js
import * as React from 'react';
import LabeledCheckboxMaterialUi from 'labeled-checkbox-material-ui';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LabeledCheckboxMaterialUi
          label="Use colors"
          onChange={this.handleChange}
        />
      </div>
    );
  }

  handleChange = (checked: boolean) => {
    console.log(checked);
  };
}

export default App;
```

---

## Changelog

### 1.0.0

- labeled-checkbox-material-ui is made publicly available

### 1.0.1

- onChange is optional as it is not requried when the checkbox is disabled

### 1.0.2

- Fixed the pass of styles from parent to this component

### 1.1.0

- Updated packages

### 1.2.0

- Updated packages

### 2.0.0

- Updated packages

### 2.1.0

- Updated packages

### 2.2.0

- Added a storybook
- Removed lodash
- Updated packages

### 2.3.0

- Updated packages

### 2.4.0

- Updated packages
- Moved from npm to yarn

### 2.5.0

- Updated packages

### 2.6.0

- Updated packages

### 2.6.1

- Fixed crash produced by "export \* from"

### 2.6.2

- Added two new props: classNameCheckbox and classNameLabel

### 2.6.3

- Fixed Readme

### 2.7.0

- Accepting React 17 as peerDependencies
- Fixed security warnings

### 2.7.1

- Updated packages

### 3.0.0

- Supports minimum React 18

### 3.1.0

- Updated packages
