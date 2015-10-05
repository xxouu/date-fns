var parse = require('./parse')

/**
 * Is the given date the first day of a month?
 *
 * @param {Date|String|Number} date to check
 * @returns {Boolean} the date is the first day of a month
 */
var isFirstDayOfMonth = function(dirtyDate) {
  return parse(dirtyDate).getDate() == 1
}

module.exports = isFirstDayOfMonth

