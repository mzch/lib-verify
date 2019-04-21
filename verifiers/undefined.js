function isNot() {
    return field => field ? undefined : `{field} was not provided but is a required value.`

}

module.exports = {
    isNot
}
