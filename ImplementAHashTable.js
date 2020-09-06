class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.lenght; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(item, value){
        let place = this._hash(item)
        this.data[place] = value
    }

    get(item){
        let place = this._hash(item)
        return this.data[place]
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'));