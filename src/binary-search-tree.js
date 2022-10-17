const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  #root;
  #insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.#insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.#insertNode(root.right, newNode);
      }
    }
  }
  #searchNode(root, value) {
    console.log(root);
    if (!root) {
      return null;
    } else {
      if (root.data === value) {
        return root;
      } else if (value < root.data) {
        return this.#searchNode(root.left, value);
      } else {
        return this.#searchNode(root.right, value);
      }
    }
  }
  #deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.data) {
      root.left = this.#deleteNode(root.left, value);
    } else if (value > root.data) {
      root.right = this.#deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }

      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.data = this.min(root.right);
      root.right = this.#deleteNode(root.right, root.data);
    }
    return root;
  }

  constructor() {
    this.#root = null;
  }

  root() {
    return this.#root;
  }

  add(value) {
    const newNode = new Node(value);

    if (this.#root === null) {
      this.#root = newNode;
    } else {
      this.#insertNode(this.#root, newNode);
    }
  }

  has(value) {
    return Boolean(this.#searchNode(this.#root, value));
  }

  find(value) {
    return this.#searchNode(this.#root, value);
  }

  remove(value) {
    this.#root = this.#deleteNode(this.#root, value);
  }

  min() {
    let result = this.#root;

    while (result.left) {
      result = result.left;
    }

    return result.data;
  }

  max() {
    let result = this.#root;

    while (result.right) {
      result = result.right;
    }

    return result.data;
  }
}

module.exports = {
  BinarySearchTree,
};

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);

console.log(tree.find(2));
// console.log(tree.has(2));
