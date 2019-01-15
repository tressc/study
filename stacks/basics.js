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
  this.max = []; // max value is also a stack!

  this.pop = function() {
    var popped = this.stack.pop();
    if (this.max[this.max.length - 1] === popped) {
      this.max.pop();
    }
  };

  this.push = function(el) {
    if (this.max.length === 0 || el > this.max[this.max.length - 1]) {
      this.max.push(el);
    }
    this.stack.push(el);
  };
}
