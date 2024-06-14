
//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
/*
Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
// BONUS: Has to be recursive
// https://leetcode.com/problems/climbing-stairs/

let solutions = {}

function stepChecker(steps)
{
    if (solutions[steps])
    {
        return solutions[steps];
    }

    let possibilities = 0;

    if (steps === 1)
    {
        return 1;
    }

    if (steps === 2)
    {
            return 2;
    }

    let one = stepChecker(steps - 1);
    solutions[steps - 1] = one;

    let two = stepChecker(steps - 2);
    solutions[steps - 2] = two;

    possibilities += one;
    possibilities += two;

    return possibilities;
}

console.log(stepChecker(47));
console.log(solutions);