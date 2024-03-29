'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var core = require('@material-ui/core');
var feCore = require('@openimis/fe-core');
var React = require('react');
var reactRedux = require('react-redux');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var messages_en = {
	"csu.dateFrom": "From",
	"csu.dateTo": "To"
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var MauritaniaCardReport = function MauritaniaCardReport(props) {
  var values = props.values,
    setValues = props.setValues;
  var userHealthFacility = reactRedux.useSelector(function (state) {
    return state.loc.userHealthFacilityFullPath;
  });
  if (userHealthFacility !== null && userHealthFacility !== void 0 && userHealthFacility.code) {
    values.hflocation = userHealthFacility;
  }
  console.log(values);
  return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "location.HealthFacilityPicker",
    onChange: function onChange(hflocation) {
      return setValues(_objectSpread$1(_objectSpread$1({}, values), {}, {
        hflocation: hflocation
      }));
    },
    value: userHealthFacility !== null && userHealthFacility !== void 0 && userHealthFacility.code ? userHealthFacility.code : values.hflocation
  })));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var DEFAULT_CONFIG = {
  "translations": [{
    key: "en",
    messages: messages_en
  }],
  "reports": [{
    key: "beneficiary_card_mauritania",
    component: MauritaniaCardReport,
    isValid: function isValid() {
      return true;
    },
    getParams: function getParams(values) {
      var _values$hflocation;
      return {
        hflocation: (_values$hflocation = values.hflocation) !== null && _values$hflocation !== void 0 && _values$hflocation.code ? values.hflocation.code : 0
      };
    }
  }]
};
var MauritaniaModule = function MauritaniaModule(cfg) {
  return _objectSpread(_objectSpread({}, DEFAULT_CONFIG), cfg);
};

exports.MauritaniaModule = MauritaniaModule;
//# sourceMappingURL=index.js.map
