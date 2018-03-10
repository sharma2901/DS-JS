/**
 * Constructor Function for LinkedList
 */
function LinkedList() {
  this.head = null;
}

/**
 * Constructor function for Node
 */
function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

/**
 * Insert data into head of linkedList
 * @param {*} data
 */
LinkedList.prototype.insertFirst = function(data) {
  this.head = new Node(data, this.head);
};

/**
 * Returns Size of LinkedList
 */
LinkedList.prototype.size = function() {
  var counter = 0;
  var currNode = this.head;
  while (currNode) {
    counter++;
    currNode = currNode.next;
  }
  return counter;
};

/**
 * Get first element of LinkedList
 */
LinkedList.prototype.getFirst = function() {
  return this.head;
};

/**
 * Returns Last element of LinkedList
 */
LinkedList.prototype.getLast = function() {
  if (!this.head) return null;
  var currNode = this.head;
  while (currNode.next) currNode = currNode.next;
  return currNode;
};

/**
 * Clears the LinkedList
 */
LinkedList.prototype.clear = function() {
  this.head = null;
};

/**
 * Removes the First element of LinkedList and returns it
 */
LinkedList.prototype.removeFirst = function() {
  if (!this.head) return null;
  var data = this.head;
  this.head = data.next;
  return data;
};

/**
 * Removes last element from LinkedList and returns it
 */
LinkedList.prototype.removeLast = function() {
  if (!this.head) return null;
  if (!this.head.next) {
    var data = this.head;
    this.head = null;
    return data;
  }
  var prev = this.head;
  var node = this.head.next;
  while (node.next) {
    prev = node;
    node = node.next;
  }
  prev.next = null;
  return node;
};

/**
 * Inserts new node to the tail of LinkedList
 */
LinkedList.prototype.insertLast = function(data) {
  var newNode = new Node(data);
  if (!this.head) this.head = newNode;
  var node = this.head;
  while (node.next) node = node.next;
  node.next = newNode;
};

//Examples
var ll = new LinkedList();
ll.insertFirst(10);
ll.insertFirst(20);
ll.insertFirst(30);
ll.insertLast(40);
console.log(ll.getFirst());
console.log(ll.getLast());
console.log(ll.removeFirst());
console.log(ll.removeLast());
console.log(ll.size());
ll.clear();
console.log(ll);
