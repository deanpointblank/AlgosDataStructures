/*Creata a funciton that reverse a string:
'Hi my name in Andrei' should be:
'ierdnA si eman yn iH' */

function reverse(str){

    if (!str || typeof(str) !== 'string' || str.length < 2){
        return 'something is wrong with your string!'
    }


    let newString = str.split('');
    let reversedStr = []
    while(newString.length > 0){
        reversedStr.push(newString.pop())
    }
    console.log(reversedStr.join(''))
    return reversedStr.join('')
}

reverse('Hi my name is Dean')