const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let result = { ...l };
  const removeItem = (current, previous, value, pos) => {
    if (current === null) {
      return;
    }

    if (current.value === 3) {
      if (current.next === null) {
        previous.next = null;
        return;
      }

      current = current.next;

      if (pos === 0) {
        result = current;
      }

      return removeItem(current, previous, value, pos);
    } else {
      if (previous) previous.next = current;

      return removeItem(current.next, current, value, pos + 1);
    }
  };

  removeItem(result, null, k, 0);

  return result;
}

module.exports = {
  removeKFromList,
};
