/**
 * Constructor function for creating HashTable Object
 * @param {Number} length
 */
function HashTable(length) {
  this.buckets = Array(length);
  this.tableLength = this.buckets.length;
}

/**
 *Constructor function for each node in hash table
 * @param {String} key
 * @param {*} value
 */
function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

/**
 * Returns Hash for supplied key
 * @param {string} key
 */
HashTable.prototype.hash = function(key) {
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  return sum % this.tableLength;
};

/**
 * Upserts a HashNode to the HashTable
 * @param {string} key
 * @param {*} value
 */
HashTable.prototype.upsert = function(key, value) {
  let index = this.hash(key);
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    let currNode = this.buckets[index];
    while (currNode.next) {
      currNode = currNode.next;
      if (currNode.key === key) {
        currNode.value = value;
        return;
      }
    }
    currNode.next = new HashNode(key, value);
  }
};

/**
 * returns corrosponding HashNode object if exists, null otherwise
 * @param {string} key
 */
HashTable.prototype.get = function(key) {
  let index = this.hash(key);
  let currNode = this.buckets[index];
  while (currNode) {
    if (currNode.key === key) {
      return currNode;
    }
    currNode = currNode.next;
  }
  return null;
};

/**
 * get All HashNodes in an Array
 */
HashTable.prototype.getAll = function() {
  let nodesArray = [];
  for (let i = 0; i < this.tableLength; i++) {
    let currNode = this.buckets[i];
    while (currNode) {
      nodesArray.push(currNode);
      currNode = currNode.next;
    }
  }
  return nodesArray;
};

// Examples

// Create a new HasTable
let ht = new HashTable(30);

// Upsert Some Value
ht.upsert('aman', 'aman@gmail.com');
ht.upsert('Surya', 'surya@gmail.com');
ht.upsert('Surya', 'suryasharma@gmail.com');
ht.upsert('Shyam', 'shyam@gmail.com');
ht.upsert('maan', 'maan@gmail.com');

console.log(ht.getAll()); // Prints an array of all the inserted value
console.log(ht.get('aman')); // Prints matched HashNode
console.log(ht); // Prints Complete HashTable
