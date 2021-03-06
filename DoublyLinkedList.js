// Constructor function for Linked List, head and tail will contain Object of Node
function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

// Constructor function for each node, value contains data, next and prev contains object of Node
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// Adds value to the head of DoublyLinkedList
DoublyLinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

// Adds value to the tail of DoublyLinkedList
DoublyLinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

// Removes the head from DoublyLinkedList, sets head to next node, and returns the value of old head
DoublyLinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  var value = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return value;
};

// Removes the tail from DoublyLinkedList, sets tail to prev node, and returns the value of old tail
DoublyLinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  var value = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return value;
};

// returns the value if found, null otherwise
DoublyLinkedList.prototype.search = function(value) {
  if (!this.head) return null;
  var currNode = this.head;
  while (currNode) {
    if (currNode.value === value) return currNode.value;
    currNode = currNode.next;
  }
  return null;
};

// returns index of the value if found, -1 otherwise
DoublyLinkedList.prototype.indexOf = function(value) {
  if (!this.head) return -1;
  var currNode = this.head;
  var counter = 0;
  while (currNode) {
    if (currNode.value === value) return counter;
    counter++;
    currNode = currNode.next;
  }
  return -1;
};

//Examples
var ll = new DoublyLinkedList();
ll.addToHead(20); // Add 20 to Head
ll.addToHead(10); // Add 10 to Head
ll.addToTail(30); // Add 30 to Tail
ll.addToTail(40); // Add 40 to Tail
console.log(ll); //Prints complete DoublyLinkedList
console.log(ll.removeHead()); // Removes Head and returns 10;
console.log(ll.removeTail()); // Removes Tail and returns 40;
console.log(ll.search(20)); // Returns 20
console.log(ll.search(35)); // Returns null
console.log(ll.indexOf(20)); // Returns 0
console.log(ll.indexOf(30)); // Returns 1
console.log(ll.indexOf(35)); // Returns -1
