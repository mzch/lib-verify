## lib-verify

> A simple verification library for validating the sanity of variable contents.

### Usage

```javascript
const { verify } = require('../index')

let result = verify('Name', 'Alexander', [
    verify.string.maxLength(6),
    verify.string.minLength(3)
])

console.log(result) // [ "Name field is too long: 'Alexander', maximum length is 6 but found length 9" ]
```