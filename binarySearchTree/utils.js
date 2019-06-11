let searchTree = function (node, data, Node) {
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

module.exports = {searchTree}