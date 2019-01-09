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

def delete(parent, old_node):
    parent.next = old_node.next

def delete_after(parent):
    parent.next = parent.next.next
