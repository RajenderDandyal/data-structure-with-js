// set is same as Set provided in es6
// we cannot add duplicate entries
// here we also have additional methods like union, intersection, subset

class MySet {
  constructor() {
    this._collection = [];
  }

// present implementation is for strings only

  has(value) {
    return this._collection.includes(value);// true/false
  }

  add(value) {
    if (!this.has(value)) {
      this._collection.push(value)
    }
  }

  remove(value) {
    if (this.has(value)) {
      let index = this._collection.indexOf(value);
      return this._collection.splice(index, 1);
    }
    return false;
  }

  length() {
    return this._collection.length;
  }

  get collection() {
    return this._collection;
  }

  union(otherSet) {
    let newSet = new MySet();
    otherSet.collection.forEach(item => {
      if (!this.has(item)) {
        this.add(item)
      }
    })
    return this.collection;
  }

  intersection(otherSet) {
    let arr = [];
    otherSet.collection.forEach(item => {
      if (this.has(item)) {
        arr.push(item)
      }
    })
    return arr
  }

  subSet(otherSet) {
    let res = [];
    otherSet.collection.forEach(item => {
      if (this.has(item)) {
        res.push(item)
      }
    })
    return res.length === otherSet.length();
  }
}

let set = new MySet();
set.add("rajender");
set.add("dandyal")
set.add("pro");
set.add("developer")
set.add("and")
set.add("investor")
console.log(set)
console.log(set.has("rajender"))
console.log(set.has("dandyal"))
console.log(set.has("developer"))
console.log(set.has("aabra ka dabra"))
console.log(set.remove("rajender"))
console.log(set)
console.log(set.collection)
//console.log(set._collection);
// set2

let set2 = new MySet();
set2.add("rajender2");
set2.add("dandyal2")
set2.add("pro");// should not repeat
set2.add("developer2")
set2.add("and")// should not repeat
set2.add("investor2")
console.log(set2)
console.log(set2.has("rajender2"))
console.log(set2.has("dandyal2"))
console.log(set2.has("developer2"))
console.log(set2.has("aabra ka dabra"))
console.log(set2.remove("rajender2"))
console.log(set2)
//console.log(set2._collection);

// union
set.union(set2)
console.log(set)

// set3
let set3 = new MySet();
set3.add("rajender3");
set3.add("dandyal3")
set3.add("pro");// should intersect with set
set3.add("developer3")
set3.add("and")// should intersect with set
set3.add("investor3")
console.log(set3)
console.log(set3.has("rajender3"))
console.log(set3.has("dandyal3"))
console.log(set3.has("developer3"))
console.log(set3.has("aabra ka dabra"))
console.log(set3.remove("rajender3"))
console.log(set3)
//console.log(set3._collection);


// intersection
console.log(set.intersection(set3));


// subset
let set4 = new MySet();
set4.add("and")
set4.add("dandyal")
console.log(set.subSet(set4))