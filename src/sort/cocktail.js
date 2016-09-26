const swap = require('./utils').swap;

/**
 * Cocktail sort. Complexity - O(n^2)
 * @param {Array} arr
 * @returns {Array}
 */
exports.sort = arr => {
    const length = arr.length;
    let left = 0;
    let right = length - 1;
    while(left <= right) {
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
        right--;

        for (let j = right; j > left; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);
            }
        }
        left++;
    }
    return arr;
};

