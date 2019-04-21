const format = require('string-template')

function verify(field, entry, rules) {
    if (!Array.isArray(rules)) rules = [rules]

    const errors = []

    for (let rule of rules) {
        const result = rule(entry)

        if (result) {
            errors.push(format(result, { field }))
        }
    }

    return errors.length ? errors : undefined
}

verify.string = require('./verifiers/string')
verify.undefined = require('./verifiers/undefined')
verify.numeric = require('./verifiers/numeric')

module.exports = { verify }
