// same as stack but reverse
// FIFO first in first out
// Priority Queue is an abstract data type, which is similar to a queue, 
// however, in the priority queue, every element has some priority. 
//The priority of the elements in a priority queue determines the order in which elements are removed from the priority queue.
//Therefore all the elements are either arranged in an ascending or descending order.

// So, a priority Queue is an extension of the queue with the following properties. 

// Every item has a priority associated with it.
// An element with high priority is dequeued before an element with low priority.
// If two elements have the same priority, they are served according to their order in the queue.

class PriorityQueue {
  constructor() {
    this._collection = [];
  }

  collection() {
    return this._collection;
  }

  // {priority:number, value:any}
/*  enqueue(obj) {
    this._collection.push(obj);
    let compareFn = (a, b) => a.priority - b.priority;
    this._collection.sort(compareFn)
  }*/
  enqueue(obj) {
    if (this.isEmpty()) {
      this._collection.push(obj)
    } else {
      let added = false;
      for (let i=0; i<this.length(); i++){
        if (obj.priority<this.collection()[i]["priority"]){
          this._collection.splice(i,0,obj)
          added = true;
          break;
        }
      }
      if (!added){
        this._collection.push(obj)
      }
    }
  }

  dequeue() {
    //this._collection.shift(); this way the first element will get removed but .. then the first element will not have priority 1
    this._collection.shift();
    // so increase the priority of all other element in array by 1 by decreasing 1;
    this._collection.forEach(item=>{
      item.priority--
    })
  }

  front() {
    return this._collection[0]
  }

  length() {
    return this._collection.length
  }

  isEmpty() {
    return this.length() === 0
  }

}

let queue = new PriorityQueue();
queue.enqueue({priority:1, value:"rajender"})
queue.enqueue({priority: 2, value: "dandyal"})
queue.enqueue({priority: 2, value: "dandyal"})
queue.enqueue({priority: 2, value: "dandyal"})
queue.enqueue({priority:4, value:"developer"})
queue.enqueue({priority:3, value:"pro"})
queue.enqueue({priority:6, value:"investor"})
queue.enqueue({priority:5, value:"and"})
console.log(queue.collection())
queue.dequeue()
queue.dequeue()
console.log(queue.length())
console.log(queue.collection())
console.log(queue.front())
console.log(queue.isEmpty())
