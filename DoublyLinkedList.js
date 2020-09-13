class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    traversal(index){
        let i = 0
        let currentNode = this.head
        if (index < this.length/2){
            while(i !== index -1){
                i++
                currentNode = currentNode.next
            }
            return currentNode
        } 
        if (index > this.length/2) {
            i = this.length
            currentNode = this.tail
            while(i !== index){
                
                currentNode = currentNode.previous
                // console.log(currentNode)
                i--
            }
            return currentNode
        }
    }

    append(value){
        let currentNode = new Node(value)
        currentNode.previous = this.tail
        this.tail.next = currentNode
        this.tail = currentNode
        this.length++
    }

    prepend(value){
        let currentNode = new Node(value)
        currentNode.next = this.head
        this.head.previous = currentNode
        this.head = currentNode
        this.length++
    }

    insert(index, value){
        if(index === 0){
            this.prepend(value)
        } else if ( index > this.length){
            this.append(value)
        } else {
            let currentNode = this.traversal(index)
            
            let nextNode = currentNode.next
            let newNode = new Node(value)
            console.log(currentNode.value)

            currentNode.next = newNode
            newNode.previous = currentNode

            newNode.next = nextNode
            nextNode.previous = newNode
            
            this.length++
        }
        
    }

    removal(){}

    printList(){
        let currentNode = this.head
        let nodeList = []
        while(currentNode !== null){
            nodeList.push(currentNode.value)
            currentNode = currentNode.next
        }
        return nodeList
    }
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(4, 3);
console.log(myLinkedList.printList())
// myLinkedList.remove(30)
// console.log(myLinkedList.printList())