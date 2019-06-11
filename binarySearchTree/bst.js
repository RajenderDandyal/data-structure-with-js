/*
* Tree
A Tree is like a linked list, except it keeps references to many child nodes in a hierarchical structure.
In other words, each node can have no more than one parent. The Document Object Model (DOM) is such a structure,
with a root html node that branches into the head and body nodes, which further subdivide into all the familiar html tags.
Under the hood, prototypal inheritance and composition with React components also produce tree structures. Of course,
as an in-memory representation of the DOM, React’s Virtual DOM is also a tree structure.

The Binary Search Tree is special because each node can have no more than two children.
The left child must have a value that is smaller than or equal to its parent, while the right child must have a greater value.
Structured and balanced in this way, we can search for any value in logarithmic time because we can ignore one-half of the branching with each iteration.
Inserting and deleting can also happen in logarithmic time.
Moreover, the smallest and largest value can easily be found at the leftmost and rightmost leaf, respectively.

Traversal through the tree can happen in a vertical or horizontal procedure.
In Depth-First Traversal (DFT) in the vertical direction, a recursive algorithm is more elegant than an iterative one.
Nodes can be traversed in pre-order, in-order, or post-order. If we need to explore the roots before inspecting the leaves,
we should choose pre-order. But, if we need to explore the leaves before the roots, we should choose post-order.
As its name implies, in-order enables us to traverse the nodes in sequential order.
This property makes Binary Search Trees optimal for sorting.

In Breadth-First Traversal (BFT) in the horizontal direction,
an iterative approach is more elegant than a recursive one.
This requires the use of a queue to track all the children nodes with each iteration.
The memory needed for such a queue might not be trivial, however. If the shape of a tree is wider than deep,
BFT is a better choice than DFT. Also, the path that BFT takes between any two nodes is the shortest one possible.
* */

/* Binary Search Tree */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data); // 1st node
      return;
    } else {
      const searchTree = function (node) {
        if (data <= node.data) {
          if (node.left === null) {// if node is null then create new node
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left); // run same fun with node.left as node
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    ;
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
    ;
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    ;
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
    ;
  }

  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();

      let traverseInOrder = function (node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }

      traverseInOrder(this.root);
      return result;
    }
    ;
  }

  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();

      let traversePreOrder = function (node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    }
    ;
  }

  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();

      let traversePostOrder = function (node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        ;
        if (node.right != null) {
          Q.push(node.right);
        }
        ;
      }
      ;
      return result;
    } else {
      return null;
    }
    ;
  };
}


const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());