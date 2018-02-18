const w = require('whew')
const assert = require('assert')
const gar = require('./')

w.add('-h hey --toggle -ac --hey=hi -spaced "hey there" -num 1 lone', (result) => {
	const parsed = gar(['-h', 'hey', '--toggle', '-ac', '--hey=hi', '-spaced', 'hey there', '-num', '1', 'lone'])

	assert.deepStrictEqual(parsed, {
		'h': 'hey',
		'toggle': true,
		'a': true,
		'c': true,
		'hey': 'hi',
		'spaced': 'hey there',
		'num': 1,
		'_': ['lone']
	})

	result(true, 'Object matched expected!')
})

w.add('lone --toggle -xyz', (result) => {
	const parsed = gar(['lone', '--toggle', '-xyz'])

	assert.deepStrictEqual(parsed, {
		'toggle': true,
		'x': true,
		'y': true,
		'z': true,
		'_': ['lone']
	})

	result(true, 'Object matched expected!')
})

w.add('lone --toggle TRUE -xyz', (result) => {
	const parsed = gar(['lone', '--toggle', 'TRUE', '-xyz'])

	assert.deepStrictEqual(parsed, {
		'toggle': true,
		'x': true,
		'y': true,
		'z': true,
		'_': ['lone']
	})

	result(true, 'Object matched expected!')
})

w.add('No arguments', (result) => {
	const parsed = gar([])

	assert.deepStrictEqual(parsed, {'_' : []})

	result(true, 'Object matched expected!')
})

w.test()