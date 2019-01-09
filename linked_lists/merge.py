class ListNode:
    def __init__(self, data=0, next=None): # define class instantiator
        self.data = data
        self.next = next

    def search_list(head, target): # search for target node in list
        while head and head.data != target:
            head = head.next
        return head

    def insert(parent, new_node):
        new_node.next = parent.next
        parent.next = new_node

    def delete_after(parent):
        parent.next = parent.next.next

def merge(head1, head2):
    dummy_head = tail = Node()

    while head1 and head2:
        if head1.data < head2.data:
            tail.next = head1
            head1 = head1.next
        else:
            tail.next = head2
            head2 = head2.next
        tail = tail.next

    tail.next = head1 or head2 # adds the remaining nodes, if any
    return dummy_head.next
