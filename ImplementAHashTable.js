class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(item, value){
        let place = this._hash(item)
        if(!this.data[place]){
            this.data[place] = [];
        }
        this.data[place].push([item, value])
        return this.data
    }

    get(item){
        let place = this._hash(item)
        const currentBucket = this.data[place];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === item){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    keys(){
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++){
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 10000);
myHashTable.set('oranges', 2);
console.log(myHashTable.keys());