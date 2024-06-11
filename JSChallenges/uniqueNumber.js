//ARRAY

let arr = [1,1,2,2,3,3,4,4,5]

function findUnique(array)
{
   return array.filter((number) => {
        return array.indexOf(number) == array.lastIndexOf(number);
    })[0]
}

console.log(findUnique(arr));

function findUnique2(array)
{
    let checked = new Set();
    
    for (let i = 0; i < array.length; i++)
    {
        if (!checked.has(array[i])) 
        {
            checked.add(array[i]);
        } else {
            checked.delete(array[i]);
        }
    }
    return [...checked][0];
}