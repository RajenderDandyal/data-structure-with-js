// normal arrays can also be used as stack
// stack is where First in Last Out principal is followed FILO
// elements are always removed from the end/top
// elements are always added on the end/top


class Stack {

  constructor(){
    // protected properties
    this._count = 0;
    this._storage = {};

  }

  // add a value onto the end of stack
  push (value){
    this._storage[this._count] = value;
    this._count++;
  };
  // remove and return an element from the end of stack
  pop (){
    if (this._count === 0) return;
    this._count--; // first decrease count because count is like length = index + 1
    let result = this._storage[this._count];
    delete this._storage[this._count];

    return result;
  };
  peek(){
    return this._storage[this._count-1]
  }
  length(){ return this._count;}
}

let stack = new Stack();
stack.push("hi")
stack.push("hi there")
stack.push("bye")
stack.push("bye there")
console.log(stack);
console.log(stack.length())
console.log(stack.peek())
stack.pop()
stack.pop()
stack.pop()
console.log(stack);
console.log(stack.length());
console.log(stack.peek());
