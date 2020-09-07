// Google Question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// It should return 1

// Given an array = [2, 3, 4, 5]
// It should return undefined

function firstRecurringCharacter(array){
    let characterHash = {}
    let currentCharacterValue = []
    let characterIndexDifference 

    for (let i = 0; i < array.length; i++){
        if(!characterHash[array[i]]){
            characterHash[array[i]] = []
        }
        characterHash[array[i]].push(i)
    }

    for (let i = 0; i < array.length; i++){
        if(characterHash[array[i]].length > 1){
            // how can I tell which one is going to recur first?
            // subtract first two element indexes in the array
            characterIndexDifference = characterHash[array[i]][1] - characterHash[array[i]][0]
            
            if (currentCharacterValue.length === 0){
                currentCharacterValue[0] = characterIndexDifference
                currentCharacterValue[1] = array[i]
            }
            if( characterIndexDifference < currentCharacterValue[0] ){
                currentCharacterValue[0] = characterIndexDifference
                currentCharacterValue[1] = array[i]
            }
            
        }
        // console.log(characterHash)
        
    }

    if(!!currentCharacterValue){
        return currentCharacterValue[1]
    } else {
        return undefined
    }
}


// Way more elegant solution
function firstRecurringCharacter2(array){
    //create hashTable to hold unique values
    let characterHash = {}

    //loop through the array
    for(let i = 0; i < array.length; i++){

        //if the value already exist, return the value
        if(!!characterHash[array[i]]){
            return array[i]
        }
        //if not place the value into the hash 
        else {
            characterHash[array[i]] = i
        }
    }
    return undefined
}
console.log(firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]))