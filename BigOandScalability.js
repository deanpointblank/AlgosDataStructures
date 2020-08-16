//Allows me to use the performce function
const performance = require('perf_hooks').performance;

const nemo = ['nemo']; // 2-7 milisecond runtime
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'] // 2-7 milisecond runtime
const large = new Array(100000).fill('nemo') // 1223 - 1551 miliseconds runtime

function findNemo(array){
    let t0 = performance.now();
    for(let i = 0; i < array.length; i++){
        if (array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds')
}

findNemo(large)