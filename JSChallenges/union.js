//[1,3,4,5]
//[1,2,6]
//=> [1,2,3,4,5,6]

let a = [1,3,4,5];
let b = [1,2,6]

let uniqueNums = new Set();

function union(arr1, arr2)
{
    for (let i = 0; i < arr1.length; i++)
    {
        if (!uniqueNums.has(arr1[i]))
        {
            uniqueNums.add(arr1[i]);
        }
    }


    for (let j = 0; j < arr2.length; j++)
    {
        if (!uniqueNums.has(arr2[j]))
        {
            arr1.push(arr2[j]);
        } 
    }

    return arr1;

}

console.log(union(a,b));