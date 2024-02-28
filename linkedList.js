/*
       Arrays 
           -- Built in data structure
           -- Methods
                 -- push: pushes the element to the end of the array
                 -- pop: removes the element from the end of the array
                 -- unshift: inserts the element on the first index of the array
                 -- shift: inserts the element on the last index of the array
                 -- splice: inserts/removes an element at the specified index
                 -- forEach: iterates all the elements of the array and runs a call back function on every element
                 -- map
                 -- reduce
                 -- filter
                 -- sort
                 -- linkedList

*/

// let numbers = [4,5,6,7,8,];

// numbers.push(10);
// numbers.pop();

// numbers.unshift(3);
// numbers.shift();

// numbers.splice(2,0,3);
// numbers.splice(4,1,10);

// numbers.push(10,11);

// numbers[0] = 1;

// let word = "Apple";
// console.log(word.slice(0,2) + "b" + word.slice(3));

// console.log(numbers);

// numbers.forEach((value,index)=>{
//     console.log(value,index);
// })

/*
    Linked List


    -- Data structure
    -- Abstract data type : user defined data type = user define its behaviour data and its operations
    -- types
         -- singly linked list
         -- doubly linked list
         -- circularly linked list
    -- singly linked list
    -- sll is a chain of nodes/objects from diffrent memory location linked to one another

*/


// let person1 = ["person",21,"M"]
// console.log(person1[0]);

// let person2 = {
//     name : "person2",
//     age : 21,
//     gender : "M"
// };


// console.log(person2.age);


// LinkedList normal

// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// let node1 = new Node(2);
// // let node2 = new Node(3);
// node1.next = new Node(3);
// node1.next.next = new Node(4);
// node1.next.next.next = new Node(5);
// console.log(node1);


//Linked list little optimized

// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class linkedList {
//     constructor(){
//         this.head = null;
//     }
// }

// let list = new linkedList();
// list.head = new Node(3);
// list.head.next = new Node(4);
// list.head.next.next = new Node(5);

// console.log(list);






//linked list optimized (Final) 

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor(){
        this.head = null;
    }

   insertAtTail(data){
        let newnode = new Node(data);
        if(this.head==null){
            this.head = newnode;
        }
        else{
            let tail = this.head;
            while(tail.next!=null){
               tail = tail.next;
            }
            tail.next = newnode;
            
        }
     }
     toArray(data){
        let nodes =[];
        let thead = this.head;
        while(thead !=null){
            nodes.push(thead.data)
            thead = thead.next;
        }
        return nodes;
     }
   


}

let list = new linkedList();

list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);
list.insertAtTail(6);
list.insertAtTail(7); 
console.log(list.toArray());
console.log(list.toArray().length)


