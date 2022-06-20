var singleNumber = function(nums) {
    thenum = 0
    if(nums.length == 1) {
        return nums[0]
    }
    for(var x = 0; x<nums.length; x++){
        count = 0
        for(var y = 0; y<nums.length; y++){
            if(x == y){
                continue
            }
            else if (nums[x] == nums[y]){
                continue
            }
            else {
                count++
            }
            
        }
        if(count == nums.length - 1) {
            return nums[x]
        }
    }
};

var nums1 = [2,2,1]
// output 1
var nums2 = [2,5,3,3,5]
//output 4
var nums3 = [1]
//output 1
console.log(singleNumber(nums1))
console.log(singleNumber(nums2))
console.log(singleNumber(nums3))