/**
 * Constructor Function for Stack
 */
function Stack() {
  this.data = [];
}

/**
 * Push data inti stack
 */
Stack.prototype.push = function(data) {
  this.data.push(data);
};

/**
 * Pop data from Stack
 */
Stack.prototype.pop = function() {
  return this.data.pop();
};

/**
 * Returns the data which is next to be popped, but does not pop the data from Stack
 */
Stack.prototype.peek = function() {
  if (!this.data.length) return null;
  return this.data[this.data.length - 1];
};

//Examples

let st = new Stack();
st.push(10);
st.push(20);
st.push(30);
st.push(40);

console.log(st.pop());
console.log(st.peek());
console.log(st);
