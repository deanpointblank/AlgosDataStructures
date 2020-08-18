// Given 2 arrays, create a function that lets the user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x']
//const array2 = ['z', 'y', 'i']
//should return false
//-------------------
//const array = ['a', 'b', 'c', 'x'];
//const array = ['z', 'y', 'x'];
//should return true

function commonItemsInArrays(array1, array2){
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array1[i] === array2[j]){
                console.log(true)
                return true
                break;
            }
        }
    }
    console.log(false)
    return false
}

commonItemsInArrays(['a', 'b', 'c', 'x'], ['z', 'y', 'i'])
commonItemsInArrays(['a', 'b', 'c', 'x'], ['z', 'y', 'x'])

//=> current solution is O(a * b)