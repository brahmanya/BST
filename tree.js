/**
 * Constructor for Tree class to represent tree
 *
 * root as first node of tree.
 */
function Tree() {
    this.root = null;
}

/**
 * method of class, to add new node to the tree
 *
 * if the root node is null. set it as root node.
 * otherwise add node with logic. of Binary Search Tree.
 *
 * @param {*} val
 */
Tree.prototype.addValue = function(val) {
    var n = new Node(val);

    if (this.root == null) {
        this.root = n;

        return ;
    }

    this.root.addNode(n);

    return ;
}

/**
 * method of class, to visit the tree nodes.
 */
Tree.prototype.traverse = function() {
    this.root.visit();
}

/**
 * method of class, to search the node by value.
 *
 * @param {integer} val
 */
Tree.prototype.search = function(val) {

    return this.root.search(val);
}
