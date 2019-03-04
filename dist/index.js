'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonWhiteSmall = exports.ButtonRedSmall = exports.ButtonGreenSmall = exports.ButtonOrangeSmall = exports.ButtonBlueSmall = exports.ButtonWhite = exports.ButtonRed = exports.ButtonGreen = exports.ButtonOrange = exports.ButtonBlue = exports.ButtonsRow = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _smallButtonSize;

var _styled = require('@emotion/styled');

var _styled2 = _interopRequireDefault(_styled);

var _colors = require('@time-with/colors');

var _mediaQueries = require('@time-with/media-queries');

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var smallButtonSize = (_smallButtonSize = {
  height: '50px',
  lineHeight: '50px',
  borderRadius: '25px',
  padding: '0 20px',
  '& p': {
    fontSize: '18px'
  },
  '& svg': {
    fontSize: '18px'
  }
}, _defineProperty(_smallButtonSize, _mediaQueries.tablet_max, {
  height: '40px',
  lineHeight: '40px',
  padding: '0 18px',
  '& p': {
    fontSize: '16px'
  },
  '& svg': {
    fontSize: '16px'
  }
}), _defineProperty(_smallButtonSize, _mediaQueries.phablet_max, {
  height: '35px',
  lineHeight: '35px',
  padding: '0 18px',
  '& p': {
    fontSize: '15px'
  },
  '& svg': {
    fontSize: '15px'
  }
}), _defineProperty(_smallButtonSize, _mediaQueries.phone_max, {
  fontSize: '14px',
  height: '30px',
  lineHeight: '30px',
  padding: '0 12px',
  '& p': {
    fontSize: '14px'
  },
  '& svg': {
    fontSize: '15px'
  }
}), _smallButtonSize);

var ButtonsRow = /*#__PURE__*/exports.ButtonsRow = (0, _styled2.default)('div', {
  target: 'e4u1u2g0'
})({}, function (props) {
  return _defineProperty({
    display: 'flex',
    justifyContent: props.align === 'right' ? 'flex-end' : 'flex-start', // optional align prop
    '& button': {
      marginRight: '8px',
      marginBottom: '8px'
    }
  }, _mediaQueries.phone_max, {
    flexDirection: 'column'
  });
});

var Button = /*#__PURE__*/(0, _styled2.default)('button', {
  target: 'e4u1u2g1'
})({}, function (props) {
  var _ref2;

  return _ref2 = {
    cursor: 'pointer',
    height: '66px',
    lineHeight: '66px',
    borderRadius: '33px',
    textAlign: 'left',
    color: 'white',
    border: 'none',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 30px',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    WebkitTransition: 'background-color 0.2s ease-out',
    MozTransition: 'background-color 0.2s ease-out',
    Otransition: 'background-color 0.2s ease-out',
    transition: 'background-color 0.2s ease-out',
    backgroundColor: props.disabled ? '#E3E2E3 !important' : '#E3E2E3', // optional disabled prop
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.17)',
    '& > *:first-child': {
      margin: props.noIcon ? '0' : '0 10px 0 0'
    },
    '& p': {
      fontWeight: 'bold',
      color: 'white',
      fontSize: '22px',
      lineHeight: 'inherit',
      margin: '0'
    },
    '& svg': {
      fontSize: '22px',
      lineHeight: 'inherit',
      margin: '0'
    }
  }, _defineProperty(_ref2, _mediaQueries.tablet_max, {
    height: '60px',
    lineHeight: '60px',
    padding: '0 25px',
    '& p': {
      fontSize: '20px'
    },
    '& svg': {
      fontSize: '20px'
    }
  }), _defineProperty(_ref2, _mediaQueries.phablet_max, {
    height: '52px',
    lineHeight: '52px',
    padding: '0 20px',
    '& p': {
      fontSize: '18px'
    },
    '& svg': {
      fontSize: '18px'
    }
  }), _defineProperty(_ref2, _mediaQueries.phone_max, {
    fontSize: '15px',
    height: '45px',
    lineHeight: '45px',
    padding: '0 15px',
    '& p': {
      fontSize: '16px'
    },
    '& svg': {
      fontSize: '16px'
    }
  }), _ref2;
});

var ButtonBlue = /*#__PURE__*/exports.ButtonBlue = (0, _styled2.default)(Button, {
  target: 'e4u1u2g2'
})({
  backgroundColor: _colors.blue,
  ':hover': {
    backgroundColor: (0, _polished.darken)(0.2, _colors.blue)
  }
});

var ButtonOrange = /*#__PURE__*/exports.ButtonOrange = (0, _styled2.default)(Button, {
  target: 'e4u1u2g3'
})({
  backgroundColor: _colors.orange,
  ':hover': {
    backgroundColor: (0, _polished.darken)(0.2, _colors.orange)
  }
});

var ButtonGreen = /*#__PURE__*/exports.ButtonGreen = (0, _styled2.default)(Button, {
  target: 'e4u1u2g4'
})({
  backgroundColor: _colors.green,
  ':hover': {
    backgroundColor: (0, _polished.darken)(0.2, _colors.green)
  }
});

var ButtonRed = /*#__PURE__*/exports.ButtonRed = (0, _styled2.default)(Button, {
  target: 'e4u1u2g5'
})({
  backgroundColor: '#EA4335',
  ':hover': {
    backgroundColor: (0, _polished.darken)(0.2, '#EA4335')
  }
});

var ButtonWhite = /*#__PURE__*/exports.ButtonWhite = (0, _styled2.default)(Button, {
  target: 'e4u1u2g6'
})({
  backgroundColor: 'white',
  '& p': {
    color: '#4A4A4A'
  },
  '& svg': {
    color: '#4A4A4A'
  },
  ':hover': {
    backgroundColor: (0, _polished.darken)(0.2, 'white')
  }
});

var ButtonBlueSmall = /*#__PURE__*/exports.ButtonBlueSmall = (0, _styled2.default)(ButtonBlue, {
  target: 'e4u1u2g7'
})(_extends({}, smallButtonSize));
var ButtonOrangeSmall = /*#__PURE__*/exports.ButtonOrangeSmall = (0, _styled2.default)(ButtonOrange, {
  target: 'e4u1u2g8'
})(_extends({}, smallButtonSize));
var ButtonGreenSmall = /*#__PURE__*/exports.ButtonGreenSmall = (0, _styled2.default)(ButtonGreen, {
  target: 'e4u1u2g9'
})(_extends({}, smallButtonSize));
var ButtonRedSmall = /*#__PURE__*/exports.ButtonRedSmall = (0, _styled2.default)(ButtonRed, {
  target: 'e4u1u2g10'
})(_extends({}, smallButtonSize));
var ButtonWhiteSmall = /*#__PURE__*/exports.ButtonWhiteSmall = (0, _styled2.default)(ButtonWhite, {
  target: 'e4u1u2g11'
})(_extends({}, smallButtonSize));
//# sourceMappingURL=index.js.map