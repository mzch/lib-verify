function isNumber() {
	return field => isNan(field) ? `{field} is not a number but should be a number` : undefined
}

function maxValue(val) {
	return field => field > val ? `{field} field is too high.  '${field}' is ${field - val} too high` : undefined
}

function minValue(val) {
	return field => field < val ? `{field} field is too low.  '${field} is ${val - field} too low` : undefined
}

function equals(val) {
	return field => val ? undefined : `{field} is '${field}'' but should equal '${val}'`
}

function range(min, max) {
	return field => (field > val) || (field < val) ? `{field} is '${field}' but should be between '${min}' and '${max}'` : undefined
}

function isEven() {
	return field => field % 2 == 0 ? undefined : `{field} should be even`
}

function isOdd() {
	return field => field % 2 == 1 ? undefined : `{field} should be odd`
}

function isMultiple(mul, remainder) {
	return field => field % mul == remainder ? undefined : `{field} should be a multiple of '${mul}'${remainder != 0 ? ` with a remainder of '${remainder}'` : ''}`
}

function isInt() {
	return field => String(field).indexOf(".") == -1 ? undefined : `{field} must be an integer`
}
