const nemo = ['nemo'];

function findNemo(array){
    for(let i = 0; i < array.length; i++){
        if (array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
}

findNemo(nemo)

// Breif intro to runtimes, code above is executed very quickly but it won't scale efficiently
