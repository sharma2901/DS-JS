/**
 * Constructor function for Node
 */
function Node(data, children) {
  this.data = data;
  this.children = children || [];
}

/**
 * Constructor function for tree
 */
function Tree() {
  this.root = null;
}

/**
 * Add Child to node
 */
Node.prototype.addChild = function(data) {
  this.children.push(new Node(data));
};

/**
 * Remove Child from node
 */
Node.prototype.removeChild = function(data) {
  this.children = this.children.filter(function(child) {
    child.data !== data;
  });
};

/**
 * Traverse tree in BFS
 */
Tree.prototype.traverseBF = function(fn) {
  var arr = [this.root];
  while (arr.length) {
    var node = arr.shift();
    for (var i = 0, length = node.children.length; i < length; i++) {
      arr.push(node.children[i]);
    }
    fn(node);
  }
};

/**
 * Traverse  tree in DFS
 */
Tree.prototype.traverseDF = function(fn) {
  (function recurse(currNode) {
    for (var i = 0, length = currNode.children.length; i < length; i++) {
      recurse(currNode.children[i]);
    }
    fn(currNode);
  })(this.root);
};

//Examples
var t = new Tree();
var root = new Node(50);
t.root = root;
for (var i = 1; i <= 3; i++) {
  t.root.addChild(i * 10 + 12);
}
t.root.children[0].addChild(43);
t.root.children[0].addChild(65);
t.root.children[2].addChild(58);
t.root.children[2].addChild(348);
t.traverseBF(function(node) {
  console.log(node.data);
});
t.traverseDF(function(node) {
  console.log(node.data);
});
console.log(t);
