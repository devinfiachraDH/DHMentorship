let arr1 = [1,2,3];
let arr2 = [2,3,4];

function commonElements(a, b){

    let common = new Set();
    let arrayB = new Set(b);

    for (let i = 0; i < a.length; i++)
    {
        if (arrayB.has(a[i]))
        {
            common.add(a[i]);
        }
    }
    return [...common];
}