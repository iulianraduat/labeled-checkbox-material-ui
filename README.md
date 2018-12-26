# labeled-checkbox-material-ui

A material-ui component which combines a checkbox and a label in a single component

---

## Props

The component accepts the props defined bellow in the table.

### Props accepted by LabeledCheckboxMaterialUi

| Name          | Type                       | Required | Default   | Description                                                     |
| ------------- | -------------------------- | -------- | --------- | --------------------------------------------------------------- |
| color         | string                     | no       | primary   | The color of the checkbox                                       |
| checked       | boolean                    | no       | false     | If true, the checkbox is selected                               |
| disabled      | boolean                    | no       | false     | The component is disabled                                       |
| label         | string                     | yes      | -         | The label of the checkbox                                       |
| onChange      | (checked: boolean) => void | yes      | -         | The callback function called when the checkbox value is changed |
| styleCheckbox | CSSProperties              | no       | undefined | The style applied to the checkbox                               |
| styleLabel    | CSSProperties              | no       | undefined | The style applied to the label                                  |
| value         | string                     | no       | undefined | The value of the checkbox                                       |

---

## Versions

| LabeledCheckboxMaterialUi _uses_ | Material-ui | React  |
| -------------------------------: | :---------: | :----: |
|                            1.0.x |    3.6.0    | 16.6.3 |

### About versioning schema used for LabeledCheckboxMaterialUi

- Major - it will be increased if the major version of material-ui changes or there are breaking changes in the code of LabeledCheckboxMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of LabeledCheckboxMaterialUi

---

## Example

The base component which allows to create read-only or creatable select components for selecting only one or more values:

```js
import * as React from "react";
import LabeledCheckboxMaterialUi from "labeled-checkbox-material-ui";

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
