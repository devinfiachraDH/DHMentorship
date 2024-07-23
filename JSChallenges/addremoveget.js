//addToArray(int)
//removeFromArray(int)
//get_unique() int

let array = [];


let obj = {2:1, 3:3, 4:2}
let set = new Set([1,2,3])

function addToArray(obj, num){
    if (!obj[num]){
        set.add(num);
        return obj[num] = 1;
    } else {
        set.delete(num);
        return obj[num] = obj[num] + 1;
    }
}

function removeFromArray(obj, num){
       if (obj[num]){
         return obj[num] = obj[num] - 1;
       }

       if (obj[num] <= 0){
         set.delete(num);
         return delete obj[num];
       }
}

function getUnique(){
    for (key of set){
        return key;
    }
}

console.log(getUnique(obj))