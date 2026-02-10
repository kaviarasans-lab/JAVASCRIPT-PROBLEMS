var twoSum = function(nums, target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
             if(nums[i]+nums[j]==target){
                return[j,i]
             }
        }
    }
    return[]
}

console.log(twoSum([3,1,4,2,5],9));
