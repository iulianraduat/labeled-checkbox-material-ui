(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{250:function(module,exports,__webpack_require__){__webpack_require__(251),__webpack_require__(355),module.exports=__webpack_require__(356)},356:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(109);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(518)},module)}.call(this,__webpack_require__(182)(module))},518:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(53),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(109),style={height:20},styles={checkbox:{color:"#008000"},label:{color:"#888888",fontStyle:"italic",fontWeight:"bold",textDecoration:"underline"}},showSelectedValue=function showSelectedValue(id){return function(checked){return document.getElementById(id).textContent=checked?"selected":"not selected"}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("LabeledCheckboxMaterialUi",module).add("with label",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"I like it",onChange:showSelectedValue("lcbmui1")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"lcbmui1"}))}).add("with value",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"I like it",value:"aValue",onChange:showSelectedValue("lcbmui2")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"lcbmui2"}))}).add("controlled",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"Checked",checked:!0,onChange:showSelectedValue("lcbmui3")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"Unchecked",checked:!1,onChange:showSelectedValue("lcbmui3")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"lcbmui3"}))}).add("disabled",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"Disabled",disabled:!0,onChange:showSelectedValue("lcbmui4")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"lcbmui4"}))}).add("styled",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_LabeledCheckboxMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"Checkbox and label styled",styleCheckbox:styles.checkbox,styleLabel:styles.label,onChange:showSelectedValue("lcbmui5")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"lcbmui5"}))})}.call(this,__webpack_require__(182)(module))},53:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_rai_Workspace_components_labeled_checkbox_material_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52),_home_rai_Workspace_components_labeled_checkbox_material_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(240),_home_rai_Workspace_components_labeled_checkbox_material_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(63),_home_rai_Workspace_components_labeled_checkbox_material_ui_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(241),_home_rai_Workspace_components_labeled_checkbox_material_ui_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(242),_home_rai_Workspace_components_labeled_checkbox_material_ui_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(248),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),_material_ui_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(524),_material_ui_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(523);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach(function(key){Object(_home_rai_Workspace_components_labeled_checkbox_material_ui_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}var styles_checkbox={padding:"0 5px 0 0"},styles_label={marginRight:7,whiteSpace:"nowrap"},LabeledCheckboxMaterialUi=function(_React$PureComponent){function LabeledCheckboxMaterialUi(){var _getPrototypeOf2,_this;Object(_home_rai_Workspace_components_labeled_checkbox_material_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,LabeledCheckboxMaterialUi);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=Object(_home_rai_Workspace_components_labeled_checkbox_material_ui_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,(_getPrototypeOf2=Object(_home_rai_Workspace_components_labeled_checkbox_material_ui_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(LabeledCheckboxMaterialUi)).call.apply(_getPrototypeOf2,[this].concat(args)))).isEmpty=function(obj){return void 0===obj||("string"==typeof obj&&0===obj.length||"object"==typeof obj&&0===Object.keys(obj).length)},_this.handleChange=function(event){var onChange=_this.props.onChange;onChange&&onChange(event.target.checked)},_this}return Object(_home_rai_Workspace_components_labeled_checkbox_material_ui_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(LabeledCheckboxMaterialUi,_React$PureComponent),Object(_home_rai_Workspace_components_labeled_checkbox_material_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(LabeledCheckboxMaterialUi,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_6__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{control:this.getCheckbox(),disabled:this.props.disabled,label:this.props.label,style:this.getStyleLabel()})}},{key:"getCheckbox",value:function getCheckbox(){var _this$props=this.props,color=_this$props.color,checked=_this$props.checked,disabled=_this$props.disabled,label=_this$props.label,value=_this$props.value,cbColor=this.isEmpty(color)?"primary":color,cbValue=this.isEmpty(value)?label:value;return react__WEBPACK_IMPORTED_MODULE_6__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{checked:checked,color:cbColor,disabled:disabled,onChange:this.handleChange,value:cbValue,style:this.getStyleCheckbox()})}},{key:"getStyleLabel",value:function getStyleLabel(){var styleLabel=this.props.styleLabel;return this.isEmpty(styleLabel)?styles_label:_objectSpread({},styles_label,{},styleLabel)}},{key:"getStyleCheckbox",value:function getStyleCheckbox(){var styleCheckbox=this.props.styleCheckbox;return this.isEmpty(styleCheckbox)?styles_checkbox:_objectSpread({},styles_checkbox,{},styleCheckbox)}}]),LabeledCheckboxMaterialUi}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent);__webpack_exports__.a=LabeledCheckboxMaterialUi}},[[250,1,2]]]);
//# sourceMappingURL=main.2a3d4a9c7de701feffd9.bundle.js.map