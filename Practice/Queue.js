/*

Queue.js

A function to represent a queue

Created by Stephen Morley - http://code.stephenmorley.org/ - and released under
the terms of the CC0 1.0 Universal legal code:

http://creativecommons.org/publicdomain/zero/1.0/legalcode

*/

/* Creates a new queue. A queue is a first-in-first-out (FIFO) data structure -
 * items are added to the end of the queue and removed from the front.
 */
function Queue(){

  // initialise the queue and offset
  var queue  = [];
  var offset = 0;

  /* Returns the length of the queue.
   */
  this.getLength = function(){

    // return the length of the queue
    return (queue.length - offset);

  }
  
  
  this.size = function(){
	  return (queue.length - offset);
  }

  /* Returns true if the queue is empty, and false otherwise.
   */
  this.isEmpty = function(){

    // return whether the queue is empty
    return (queue.length == 0);

  }

  /* Enqueues the specified item. The parameter is:
   *
   * item - the item to enqueue
   */
  this.enqueue = function(item){

    // enqueue the item
    queue.push(item);
    return this;

  }

  /* Dequeues an item and returns it. If the queue is empty then undefined is
   * returned.
   */
  this.dequeue = function(){

    // if the queue is empty, return undefined
    if (queue.length == 0) return undefined;

    // store the item at the front of the queue
    var item = queue[offset];

    // increment the offset and remove the free space if necessary
    if (++ offset * 2 >= queue.length){
      queue  = queue.slice(offset);
      offset = 0;
    }

    // return the dequeued item
    return item;

  }
  
  this.pop = function(){
	  return queue.pop();
  }

  /* Returns the item at the front of the queue (without dequeuing it). If the
   * queue is empty then undefined is returned.
   */
  this.peek = function(){

    // return the item at the front of the queue
    return (queue.length > 0 ? queue[offset] : undefined);

  }
  
  this.front = function(){
	  return this.peek();
  }
  
  this.toArray = function(){
	  return queue.slice(offset);
  }

}


var q = new Queue();
q.enqueue(1).enqueue(13).enqueue(14).enqueue(23);
console.log(q.dequeue());
console.log(q.toArray().join(" "));

var q1 = new Queue();
q1.enqueue(12).enqueue(13).enqueue(141).enqueue(231);
console.log(q1.dequeue());
console.log(q1.toArray().join(" "));
module.exports = Queue;