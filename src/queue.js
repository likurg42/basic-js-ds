const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.items = null;
  }
  getUnderlyingList() {
    return this.items;
  }

  enqueue(value) {
    let newItem = new ListNode(value);
    if (this.items === null) {
      this.items = newItem;
    } else {
      let current = this.items;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newItem;
    }
  }

  dequeue() {
    let value = this.items.value;
    this.items = this.items.next;
    return value;
  }
}

module.exports = {
  Queue,
};
