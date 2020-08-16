const nemo = ['nemo']; // 2-7 milisecond runtime
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'] // 2-7 milisecond runtime
const large = new Array(100000).fill('nemo') // 1223 - 1551 miliseconds runtime

function findNemo(array){
    for(let i = 0; i < array.length; i++){
        if (array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
}

findNemo(large); // O(n) --> LinearTime