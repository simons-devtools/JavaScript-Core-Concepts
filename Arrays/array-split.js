// Array slice, splice, array join elements:

// Step: 01 (slice)
const nums = [1,2,3,4,5,6,7,8,9,10];
// const part1 = nums.slice(2, 5);       // Copy in array == [2 er por theke 5 er age porjonto copy korbe];
// console.log(part1);
// console.log(nums);


// Step: 02 (splice)
// const part2 = nums.splice(2,5, 10,20,30);       // Removed in array == [2 er por theke 5 ta value removed korbe];     AND     array == 2,5 = removed // array == 10,20,30 = added;
// console.log(part2);
// console.log(nums);


// Step: 03
const forJoin = nums.join(" ,");            // Join in the all array value (nums variable);
console.log(forJoin);
