/**
 * Swap array items by index
 * @param {Array} arr
 * @param {Number} i
 * @param {Number} j
 * @returns {Array}
 */
exports.swap = (arr, i, j) => {
    if (exports.isDefined(arr[i]) && exports.isDefined(arr[j])) {
        const item = arr[i];
        arr[i] = arr[j];
        arr[j] = item;
    }
    return arr;
};

/**
 * @param {*} item
 * @returns {boolean}
 */
exports.isDefined = item => {
    return typeof item !== 'undefined';
};
