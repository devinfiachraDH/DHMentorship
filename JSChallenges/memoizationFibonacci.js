//  0 , 1 , 1, 2 ,3, 5

let fibNums = {}

function fibCalc(num)
{
    if (fibNums[num])
    {
       return fibNums[num];
    }

    if (num === 0)
    {
        return 0;
    }

    if (num === 1)
    {
        return 1;
    }

    let one = fibCalc(num - 1);
    fibNums[num - 1] = one;

    let two = fibCalc(num - 2);
    fibNums[num - 2] = two;

    return one + two;
}

console.log(fibCalc(0));
console.log(fibCalc(1));
console.log(fibCalc(2));
console.log(fibCalc(3));
console.log(fibCalc(4));
console.log(fibCalc(200));
