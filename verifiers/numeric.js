function isNumber() {
	return field => isNan(field) ? `{field} expects a number but found '${field}'` : undefined
}

function maxValue(val) {
	return field => field > val ? `{field} expects a number below ${val} but found ${field}.  This is ${field - val} too high.` : undefined
}

function minValue(val) {
	return field => field < val ? `{field} expects a number above ${val} but found ${field}.  This is ${val - field} too low.` : undefined
}

function equals(val) {
	return field => field === val ? undefined : `{field} should equal '${field}', but found '${field}'`
}

function range(min, max) {
	return field => (field >= max) || (field < min) ? `{field} expects a number between '${min}' and '${max}' but found '${field}'` : undefined
}

function isEven() {
	return field => field % 2 === 0 ? undefined : `{field} should be even, but was odd.`
}

function isOdd() {
	return field => field % 2 === 1 ? undefined : `{field} should be odd, but was even.`
}

function isMultiple(mul, remainder) {
	return field => field % mul === remainder ? undefined : `{field} should be a multiple of '${mul}'${remainder != 0 ? ` with a remainder of '${remainder}'` : ''} but was not.`
}

function isInt() {
	return field => String(field).indexOf(".") == -1 ? undefined : `{field} must be an integer but found '${field}'`
}

function isPositive(andZero = true) {
	return field => field > 0 || (field === 0 && andZero) ? undefined : `{field} expected a positive number but got '${field}'`
}

function isNegative(andZero = true) {
	return field => field < 0 || (field === 0 && andZero) ? undefined : `{field} expected a negative number but got '${field}'`
}

module.exports = {
	isNumber, maxValue, minValue, equals, range, isEven, isOdd, isMultiple, isInt, isPositive, isNegative
}
