const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage

strings[2]

//push
strings.push('e'); //O(1)

//pop
strings.pop();//O(1)

//The computer knows where the data is stored in memory so adding to or removing fron the end of an array const only 1 operation

//unshift
strings.unshift('x'); //O(n)

//Unshift requires us to reasign each item in memory to a new position in memory to make room for the ney data item at the beginning

//splice
strings.splice(2, 0, "allien") //O(n)

//splice, like unshift requires us to move through the array 
