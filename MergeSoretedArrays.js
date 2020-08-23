function mergeSortedArrays(arr1, arr2){
    let sortedArray = []
    while(arr1.length > 0 && arr2.length > 0){
        if(arr1[0] < arr2[0]){
            sortedArray.push(arr1.shift())
        } else {
            sortedArray.push(arr2.shift())
        }
    }

    console.log(sortedArray.concat(arr1).concat(arr2))
    return sortedArray.concat(arr1).concat(arr2)
}

mergeSortedArrays([0,3,4,31], [4,6,30])