/**
 * @param {number} capacity
 */
var Node = function(key) {
  this.key = key;
  this.prev = null;
  this.next = null;
}
var LRUCache = function(capacity) {
  this.map = {};
  this.capacity = capacity;

  this.size = 0;

  this.dHead = new Node();
  this.dTail = new Node();
  this.dHead.next = this.dTail;
  this.dTail.prev = this.dHead;


};
/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    //look it up in our hash map, if exists return value, else return -1
  if (key in this.map) {
    let foundNode = this.map[key].node
    this.removeAndAddToHead(foundNode)
    return this.map[key].value;
  } else {
    return -1;
  }
};
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

   // map = key: {
  //   value,
  //   node
  // }
  //call get method here to get the value
  if (this.map[key]) {
    let foundNode = this.map[key].node;
    //remove a node and add to head
    this.removeAndAddToHead(foundNode)
    this.map[key] = {value : value, node : foundNode};
  } else {
    if (this.capacity === this.size) {
      //remove node at tail
      //remove from hash
      let leastRecentlyAccessed = this.dTail.prev;

      this.delete(leastRecentlyAccessed)
      delete this.map[leastRecentlyAccessed.key]
    }
    let newNode = new Node(key)
    this.addToHead(newNode)
    this.map[key] = {value: value, node: newNode};
  }
  //if not in hash map, you insert it, else you reset the value
  //if it's at capacity, you remove the least recently used (used the doubly linked list here, the node connected to dTail)

};
LRUCache.prototype.removeAndAddToHead = function(node) {
  //removing the node
  let nodeBefore = node.prev;
  let nodeAfter = node.next;
  nodeBefore.next = nodeAfter;
  nodeAfter.prev = nodeBefore;

  //adding to the dHead.next
  let prevHead = this.dHead.next
  this.dHead.next = node;
  node.next = prevHead;
  node.prev = this.dHead;
  prevHead.prev = node;
}
LRUCache.prototype.delete = function(node) {
  let nodeBefore = node.prev;
  let nodeAfter = node.next;
  nodeBefore.next = nodeAfter;
  nodeAfter.prev = nodeBefore;
  this.size--
}
LRUCache.prototype.addToHead = function(node) {
  let prevHead = this.dHead.next
  this.dHead.next = node;
  node.next = prevHead;
  node.prev = this.dHead;
  prevHead.prev = node;
  this.size++
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
