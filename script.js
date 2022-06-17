var singleNumber = function(nums) {
    thenum = 0
    if(nums.length == 1) {
        return nums[0]
    }
    for(var x = 0; x<nums.length; x++){
        for(var y = 1; y<nums.length; y++){
            if(x == y) {
                break
            }
            if(nums[x] == nums[y]) {
                break
            }
            else {
                thenum = nums[x]
            }
        }
    }
    return thenum
};

var nums1 = [2,2,1]
// output 1
var nums2 = [4,1,4,1,2]
//output 4
var nums3 = [1]
//output 1
console.log(singleNumber(nums1))
console.log(singleNumber(nums2))
console.log(singleNumber(nums3))