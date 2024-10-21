var searchInsert = function(nums, target) {
    if (nums.indexOf(target) !== -1)
    {
        return nums.indexOf(target)
    } else {
        for (let i = 0; i <= nums.length; i++)
        {
            if (target < nums[0])
            {
                return 0;
            }

            if (target > nums[nums.length - 1])
            {
                return nums.length;
            }

            if ((target > nums[i]) && (target < nums[i + 1]))
            {
                return i + 1;
            }

        }
    }
};
