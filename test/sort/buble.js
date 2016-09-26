const test = require('ava');
const arrays = require('../../data/arrays');
const bubble = require('../../src/sort/buble');

test('sort', t => {
    arrays.forEach(arr => {
        t.deepEqual(bubble.sort(arr.mixed), arr.sort);
    });
});

