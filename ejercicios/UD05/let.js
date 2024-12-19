/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const arr = [];
  for (let i = 0; i < m; i++) {
    arr.push(nums1[i]);
  }
  const arr2 = [];
  for (let i = 0; i < n; i++) {
    arr2.push(nums2[i]);
  }

  nums1 = arr.concat(arr2);
  nums1.sort((a, b) => a - b);
};
