// Constructor function for Binary Search Tree, Each node will be BST in itself
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Insert new node to BST
BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (this.left) this.left.insert(value);
    else this.left = new BST(value);
  } else {
    if (this.right) this.right.insert(value);
    else this.right = new BST(value);
  }
};

// Returns true if tree contains the value, false otherwise
BST.prototype.contains = function(value) {
  if (this.value === value) return true;
  if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

/**
 * Traverse the tree in DepthFirst manner,
 * takes two arguments (processFn, order)
 * processFn: function we want to apply on each node
 * order: string (has 3 options {'in', 'pre', 'post})
 *        'in': in-order <LEFT -> ROOT -> RIGHT> (accending)
 *        'pre': pre-order <ROOT -> LEFT -> RIGHT>
 *        'post': post-order <LEFT -> RIGHT -> ROOT>
 */

BST.prototype.depthFirstTraversal = function(processFn, order) {
  if (order === 'pre') processFn(this.value);
  if (this.left) this.left.depthFirstTraversal(processFn, order);
  if (order === 'in') processFn(this.value);
  if (this.right) this.right.depthFirstTraversal(processFn, order);
  if (order === 'post') processFn(this.value);
};

/**
 * Traverse The tree in BreadthFirst Manner
 * One Argument: processFn, to process each node
 */
BST.prototype.breadthFirstTraversal = function(processFn) {
  var queue = [this];
  while (queue.length) {
    var node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    processFn(node);
  }
};

/**
 * Get Minimum Value Of the Tree
 */
BST.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};

/**
 * Get Maximum Value of the Tree
 */
BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};

//EXAMPLES

//Create a new Binary Search Tree
var bst = new BST(50);

// processFn for DepthFirstTraversal
function logForDFS(value) {
  console.log(value);
}

// processFn for BreadthFirstTraversal
function logForBFS(node) {
  console.log(node.value);
}

// Inserts value to BST
bst.insert(20);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(59);
bst.insert(10);
bst.insert(45);
bst.insert(35);
bst.insert(60);
bst.insert(85);
bst.insert(105);

console.log(bst.contains(5)); // false
console.log(bst.contains(50)); // true
console.log(bst.contains(10)); // true
console.log(bst.contains(140)); // false
bst.depthFirstTraversal(logForDFS, 'in'); //10 20 30 35 45 50 59 60 70 85 100 105
bst.depthFirstTraversal(logForDFS, 'pre'); //50 20 10 30 45 35 70 59 60 100 85
bst.depthFirstTraversal(logForDFS, 'post'); //10 35 45 30 20 60 59 85 105 100 70 50
bst.breadthFirstTraversal(logForBFS); //50 20 70 10 30 59 100 45 60 85 105 35
console.log(bst.getMinVal()); // 10
console.log(bst.getMaxVal()); // 105
console.log(bst); // prints complete binary search tree
