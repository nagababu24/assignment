function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (numMap[diff] !== undefined) {
        return [numMap[diff], i]; 
      }
      numMap[nums[i]] = i;
    }
    return null;
  }
  