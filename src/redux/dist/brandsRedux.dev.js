Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = reducer;
exports.getAll = void 0;

/* selectors */
var getAll = function getAll(_ref) {
  var brands = _ref.brands;
  return brands;
};
/* reducer */

exports.getAll = getAll;

function reducer() {
  var statePart =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    default:
      return statePart;
  }
}
