function booooo(n){
    for (let i = 0; i < n.length; i++){
        console.log('boooooo!');
    }
}

booooo([1,2,3,4,5]) // has a space complexity of O(1)

function arrayOfHiNTimes(n){
    let hiArray = [];
    for (let i = 0; i < n; i++){
        hiArray[i] = 'hi'; // looping through and creating an item in memeory n times
    }
    console.log(hiArray)
    return hiArray;
}

arrayOfHiNTimes(6) // has a space complexity of O(n)