// Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

function logAllpairs(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i] !== array[j]){
                console.log(array[i], array[j])
            }
        }
    }
}

logAllpairs(boxes) //=> O(n^2) Quadratic time