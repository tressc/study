// Queues are ideal when order needs to be preserved

function Queue() {
  this.queue = [];
  this.maxes = [];

  this.enqueue = function(el) {
    this.queue.push(el);
    if (el > this.maxes[this.maxes.length -1] || this.maxes.length === 0) {
      this.maxes.push(el);
    }
  };

  this.dequeue = function() {
    var el = this.queue.shift();
    if (el === this.maxes[this.maxes.length -1]) {
      this.maxes.pop();
    }
  };

  this.max = function() {
    return this.maxes[this.maxes.length - 1];
  };
}
