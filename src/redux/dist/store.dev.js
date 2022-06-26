Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _redux = require('redux');

var _initialState = _interopRequireDefault(require('./initialState'));

var _cartRedux = _interopRequireDefault(require('./cartRedux'));

var _categoriesRedux = _interopRequireDefault(require('./categoriesRedux'));

var _productsRedux = _interopRequireDefault(require('./productsRedux'));

var _settingsReducer = _interopRequireDefault(require('./settingsReducer'));

var _feedbackRedux = _interopRequireDefault(require('./feedbackRedux'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// define reducers
var reducers = {
  cart: _cartRedux['default'],
  categories: _categoriesRedux['default'],
  products: _productsRedux['default'],
  settings: _settingsReducer['default'],
  feedback: _feedbackRedux['default'],
}; // add blank reducers for initial state properties without reducers

Object.keys(_initialState['default']).forEach(function(item) {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = function() {
      var statePart =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return statePart;
    };
  }
});
var combinedReducers = (0, _redux.combineReducers)(reducers); // create store

var store = (0, _redux.createStore)(
  combinedReducers,
  _initialState['default'],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
var _default = store;
exports['default'] = _default;
