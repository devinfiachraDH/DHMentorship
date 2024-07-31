

let strs = ["eat","tea","tan","ate","nat","bat"];

console.log(anagramMatch(strs));


function anagramMatch(strings)
{
    let anagrams = {};

    for (let i = 0; i < strings.length; i++)
    {
        let found = false;

        for (const k in anagrams){
            if (anagramChecker(strings[i], k))
            {
                anagrams[k].push(strings[i]);
                found = true;
                break;
            }
        }

        if (!found) {
            anagrams[strings[i]] = [strings[i]];
        }
        console.log("i: ", i, anagrams);
    }

    return Object.keys(anagrams);
}

function anagramChecker(a , b)
{
    if (!stringCompare(a, b))
    {
        return false;
    }

    let cache = {};

    for (let i = 0; i < a.length; i++)
    {
        if (!cache[a[i]]){
            cache[a[i]] = 1;
        } else {
            cache[a[i]] = cache[a[i]] + 1;
        }
        
        if (!cache[b[i]]){
            cache[b[i]] = -1;
        } else {
            cache[b[i]] = cache[b[i]] - 1;
        }
    }

    let isZero = (value) => value == 0;

    return Object.values(cache).every(isZero);
}

function stringCompare(a, b)
{
    return a.length == b.length;
}