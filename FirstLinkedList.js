// 10 -> 5 -> 16

//'Linked List Structure'
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 15,
//                 next: null
//             }
//         }
//     }
// }
class Node {
    constructor(value){
        this.value = value;
        next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        
    }

    printList(){
        const array = []
        let currentNode = this.head
        while (!!currentNode){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    insert(index, value){
        if(index === 0){
            this.prepend(value)
        } else if(index >= this.length) {
            this.append(value)
        } else {
            let currentNode = this.head
            let i = 0
            const newNode = {
                value: value,
                next: null
            }
            let nodeLink = currentNode
            while (i !== index){
                currentNode = currentNode.next
                i++
                if(i < index){
                    nodeLink = currentNode
                }
                if(i === index){
                    nodeLink.next = newNode
                    newNode.next = currentNode
                    currentNode = newNode
                }
            }
            
            this.length++
        }
    }

    remove(index){
        let i = 0
        let currentNode = this.head
        let leader
        let removed 
        if(index === 0){
            this.head = this.head.next
            this.length--
        } else if( index > this.length){
            return console.error("The index is biger than the length of the list");
        } else {
            while(i !== index){
                console.log(currentNode)
                currentNode = currentNode.next
                i++
                if(i === index - 1){
                    leader = currentNode
                    removed = currentNode.next
                    leader.next = removed.next
                }
                
            }
            this.length--
        }
    }
}
const myLinkedList = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(7, 99);
console.log(myLinkedList.printList())
myLinkedList.remove(30)
console.log(myLinkedList.printList())