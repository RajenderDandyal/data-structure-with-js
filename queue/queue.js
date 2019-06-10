// same as stack but reverse
// FIFO first in first out

class Queue {
  constructor(){
    this._collection = [];
  }
  collection(){
    return this._collection;
  }
  enqueue(value){
    this._collection.push(value);
  }
  dequeue(){
    this._collection.shift();
  }
  front(){
    return this._collection[0]
  }
  length(){
    return this._collection.length
  }
  isEmpty(){
    return this.length() === 0
  }

}

let queue = new Queue();
queue.enqueue("rajender")
queue.enqueue("dandyal")
queue.enqueue("pro")
queue.enqueue("developer")
queue.enqueue("and")
queue.enqueue("investor")
console.log(queue.collection())
queue.dequeue()
queue.dequeue()
console.log(queue.length())
console.log(queue.collection())
console.log(queue.front())
console.log(queue.isEmpty())