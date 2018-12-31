---
path: '/sample'
date: '2018-12-31T18:06:00Z'
title: 'Sample Post'
---

# Sample

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    let j = numsMap[target - nums[i]];
    if (j !== undefined) {
      return [i, j];
    }
    numsMap[nums[i]] = i;
  }
};
```
