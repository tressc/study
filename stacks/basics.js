// when is LIFO the right tool to use?
// parsing often benefits from a stack

function printReverseLinkedList(head) {
  var stack = [];
  while (head) {
    stack.push(head);
    head = head.next;
  }

  while (stack) {
    console.log(stack.pop());
  }
}

function Stack() {
  this.stack = [];
  this.maxes = []; // max values stored in a stack!

  this.pop = function() {
    var popped = this.stack.pop();
    if (this.maxes[this.maxes.length - 1] === popped) {
      this.maxes.pop();
    }
  };

  this.push = function(el) {
    if (this.maxes.length === 0 || el > this.maxes[this.maxes.length - 1]) {
      this.maxes.push(el);
    }
    this.stack.push(el);
  };

  this.max = function() {
    return this.maxes[this.maxes.length - 1];
  };
}
