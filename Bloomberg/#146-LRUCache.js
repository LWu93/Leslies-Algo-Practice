/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

*/

/**
 * @param {number} capacity
 */

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/* psuedocode


*/

//Using a Map
// class LRUCache {
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.map = new Map();
//     }

//     get(key) {
//         if (!this.map.has(key)) return -1;

//         let val = this.map.get(key);
//         this.map.delete(key);
//         this.map.set(key,val);
//         return val
//     }

//     put(key, val) {
//         //if it has the key, we want to delete and reset it back into the map so we can keep order.
//         if (this.map.has(key)) {
//             this.map.delete(key)
//         }
//         this.map.set(key,val)

//         //check for overcapacity
//         if (this.map.size > this.capacity) {
//             const keys = this.map.keys(); //returns an array of keys.
//             //in order to access the first key in a map/set, you can use the .next method and it will give you the next key/val as an object.
//             this.map.delete(keys.next().value)
//         }
//     }
// }

//Using a Hash Table and a DLL
class LRUCache {
	constructor(maxSize) {
		this.maxSize = maxSize || 1;
		this.data = {};
		this.currSize = 0;
		this.listOfMostRecent = new DoublyLinkedList();
	}

	put(key, val) {
		//If the key doesn't exist, we want to add it
		if (!this.data[key]) {
			//Case 1 - we're at max capacity, evict least recent.
			//Case 2 - we have the room, increment our currSize counter
			if (this.currSize === this.maxSize) {
				this.evictLeastRecent();
			} else {
				this.currSize++;
			}
			//regardless of above, we have to set it to our data
			this.data[key] = new DoublyLinkedListNode(key, val);
		} else {
			//reassign val of key to new val
			this.replaceKey(key, val);
		}
		//we have to updateMostRecent to be the key we just looked for
		this.updateMostRecent(this.data[key]);
	}

	get(key) {
		//If the key doesn't exist, return -1
		if (!this.data[key]) {
			return -1;
		}
		//if we get access of the key, we have to set it to out most recent key
		this.updateMostRecent(this.data[key]);
		return this.data[key].value;
	}

	//access the head of our DLL and return the key
	getMostRecentKey() {
		return this.listOfMostRecent.head.key;
	}
	//updates the mostRecent node aka headNode in the DLL to be the new key
	updateMostRecent(node) {
		this.listOfMostRecent.setHeadTo(node);
	}
	//overrides this.data[key] value which points to a node in the doublyLinkedList
	replaceKey(key, val) {
		this.data[key].value = val;
	}
	//takes the key from our LinkedList and deletes it from data.
	evictLeastRecent() {
		let keyToRemove = this.listOfMostRecent.tail.key;
		//removes the least recently used node which is the tail. The prev node becomes the new tail.
		this.listOfMostRecent.removeTail();
		delete this.data[keyToRemove];
	}
}

//DLL CONSTRUCTOR
class DoublyLinkedListNode {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.prev = null;
		this.next = null;
	}
	//removes its pointers
	removeBindings() {
		if (this.prev !== null) {
			this.prev.next = this.next;
		}
		if (this.next !== null) {
			this.next.prev = this.prev;
		}
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	setHeadTo(node) {
		if (this.head === node) {
			return;
		} else if (this.head === null) {
			//we dont have a head OR tail, set both to be node
			this.head = node;
			this.tail = node;
		} else if (this.head === this.tail) {
			//only 1 node in LL, build our head with most recent node.
			this.tail.prev = node;
			this.head = node;
			this.head.next = this.tail;
		} else {
			//we have more >= 2 nodes in our LL, we can remove the leastRecentNode and build add to head. reset pointers
			if (this.tail === node) this.removeTail();
			//set its .next and .prev pointers to its adjacent nodes
			node.removeBindings();
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}
	}
	//evicts our leastRecentNode in our LinkedList
	removeTail() {
		//if LL is empty. Safety precaution  since we only call this if there is a tail.
		if (this.tail === null) return;
		//if LL has 1 node
		else if (this.tail === this.head) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
		}
	}
}
