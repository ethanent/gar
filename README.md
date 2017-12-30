# gar
> The lightweight Node arguments parser

[GitHub](https://github.com/ethanent/gar) | [NPM](https://www.npmjs.com/package/gar)

## Install

```bash
npm i gar
```

## Use

```javascript
const opts = require('gar')(process.argv.slice(2))

console.log(opts)
```

So for: `-h hey --toggle -ac --hey=hi -spaced "hey there" -num 1 lone`

```json
{
	"h": "hey",
	"toggle": true,
	"a": true,
	"c": true,
	"hey": "hi",
	"spaced": "hey there",
	"num": 1,
	"_": ["lone"]
}
```