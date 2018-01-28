/**
 * Constructor Function for Queue
 */
function Queue() {
  this.data = [];
}

/**
 * Add data to queue
 */
Queue.prototype.add = function(data) {
  this.data.push(data);
};

/**
 * Remove data from Queue
 */
Queue.prototype.remove = function() {
  return this.data.shift();
};

/**
 * Returns element which is next to get removed, but does not remove it from queue
 */
Queue.prototype.peek = function() {
  return this.data[0];
};

//Examples

let q = new Queue();
q.add(10);
q.add(20);
q.add(30);
q.add(40);

console.log(q.remove());
console.log(q.peek());
console.log(q);
