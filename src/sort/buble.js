const swap = require('./utils').swap;

/**
 * Bubble sort, Complexity - O(n^2)
 * @param {Array} arr
 * @returns {Array}
 */
exports.sort = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};



