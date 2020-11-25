/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumDivThree = function(nums) {
  const sum = nums.reduce((ac, el) => ac + el, 0)
  if(sum % 3 === 0) return sum
  const remainder = sum % 3
  const comp = 3 - remainder
  nums.sort((a, b) => a - b)
  const re = [], rc = []
  for(let i = 0, len = nums.length; i < len; i++) {
    if(nums[i] % 3 === remainder) {
      if(re.length < 1) re.push(i)
    }
    if(nums[i] % 3 === comp) {
      if(rc.length < 2) rc.push(i)
    }
    if(re.length === 1 && rc.length === 2) break
  }
  if(re.length === 1 && rc.length === 2) {
    return Math.max(sum - nums[re[0]], sum - nums[rc[0]] - nums[rc[1]])
  } else if(re.length === 1) {
    return sum - nums[re[0]]
  } else if(rc.length === 2) {
    return sum - nums[rc[0]] - nums[rc[1]]
  } else {
    return 0
  }
};
