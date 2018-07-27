/**
 * Constructor for the Node.
 * value is content of a node.
 * left is left branch of a node.
 * right is right branch of a node.
 *
 * @param {integer} val
 */
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

/**
 * method to add the node to the tree.
 *
 * @param {Node} n
 */
Node.prototype.addNode = function(n) {
    if (n.value < this.value) {

        if (this.left == null) {
            this.left = n;
        } else {
            this.left.addNode(n);
        }

    } else if (n.value > this.value) {

        if (this.right == null) {
            this.right = n;
        } else {
            this.right.addNode(n);
        }

    }
}


/**
 * method to hoop to the nodes.
 */
Node.prototype.visit = function() {
    if (this.left != null) {
        this.left.visit();
    }
    console.log(this.value);

    if (this.right != null) {
        this.right.visit();
    }
}

/**
 * method to search value
 *
 * @param {integer} val
 */
Node.prototype.search = function(val) {

    if (this.value == val) {

        return this;
    } else if (val < this.value && this.left != null ) {

        return this.left.search(val);
    } else if ( val > this.value && this.right != null) {

        return this.right.search(val);
    }

    return null;
}
