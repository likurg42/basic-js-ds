const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  #root;

  #addWithin(node, value) {
    if (!node) {
      return new Node(value);
    }

    if (node.value === value) {
      return node;
    }

    if (value < node.value) {
      node.left = addWithin(node.left, value);
    } else {
      node.right = addWithin(node.right, value);
    }

    return node;
  }

  constructor(data) {
    this.#root = null;
  }

  root() {
    return this.#root;
  }

  add(data) {
    if (typeof root === 'null') {
      this.#root = data;
    } else {
      this.#root = this.#addWithin(this.#root, data);
    }
  }

  has(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};

const trees = new BinarySearchTree();

console.dir(trees.root());
