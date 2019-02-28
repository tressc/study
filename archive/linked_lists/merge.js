function ListNode(val) { // ListNode 'class' definition
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    var dummyHead = new ListNode; // stays in place as reference to beginning of list
    var tail = dummyHead; // always pointing to the last node in list

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next; // advance the tail
    }

    tail.next = l1 || l2; // append any remaining nodes (they will all belong to a single list)
    return dummyHead.next; // dummyHead itself is not part of the return value
};
