const test = require('ava');
const arrays = require('../../data/arrays');
const cocktail = require('../../src/sort/cocktail');

test('sort', t => {
    arrays.forEach(arr => {
        t.deepEqual(cocktail.sort(arr.mixed), arr.sort);
    });
});