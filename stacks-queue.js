'use strict';

class _stackNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(item){
    if(this.top === null){
      this.top = new _stackNode(item, null);
      return this.top;
    } 
    this.top = new _stackNode(item, this.top);
  }

  pop() {
    if(this.top === null){
      return null;
    }
    const popped = this.top;
    this.top = popped.next;
    return popped.value;
  }

}
/*********************************************************************************************/
class _queueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value){
    const node = new _queueNode(value);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue(){
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }

}

/*********************************************************************************************/


class _queueNodeDLL {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class QueueDLL {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value){
    const node = new _queueNode(value);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      node.prev = this.last;
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue(){
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    this.first.prev = null;
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}
/*********************************************************************************************/

function peek(stack){
  if(stack.top === null){
    console.log('Nothing here...');
    return null;
  }
  console.log(stack.top.value);
  return stack.top.value;
}
function isEmpty(stack) {
  if(stack.top === null){
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}
function display(stack){
  let current = stack.top;
  while(current !== null){
    console.log(current.value);
    current = current.next;
  }
}

// function is_palindrome(s) {
//   s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//   let stacki = new Stack;
//   let stackj = new Stack;
//   for(let i = 0;i < s.length; i++){
//     stacki.push(s[i]);
//   } 
//   for(let j = s.length-1;j >= 0; j--){
//     stackj.push(s[j]);
//   } 

//   while(stacki.top !== null){
//     if(stacki.top.value !== stackj.top.value){
//       return false;
//     }
//     stacki.pop();
//     stackj.pop();
//   }
//   return true;
// }

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let compStack = new Stack;
  for(let i = 0; i<s.length;i++){
    compStack.push(s[i]);
  }
  for(let i = 0; i<s.length-1;i++){
    if(compStack.pop() !== s[i]){
      return false;
    }
  }
  return true;
}

// True, true, true, false
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

function matchParens(str){
  let parenStack = new Stack;
  let openParen = null;
  for(let i = 0; i < str.length; i++){
    if (str[i] === '('){
      openParen = i;
    }
    if(str[i] === ')' && openParen !== null){
      console.log('looking good');
      return;
    }
    if(str[i] === ')' && openParen === null){
      console.log('no opening parenthesis');
      return i;
    }
    parenStack.push(str[i]);
  }
  console.log('no closing parenthesis');
}

// matchParens('abc(asdf)asdflkj');
// matchParens('asdflkjqwer)');
// matchParens('asldkjfqwer(adflk');

// function sort(stack){
//   let tempStack = new Stack;
//   let temp = stack.top.value;
  
//   //if tempStack.top = null pop stack && push temp to tempStack
//   if(tempStack.top === null){
//     tempStack.push(temp);
//     stack.pop();
//     temp = stack.top.value;
    
//   }
//   while(stack.top !== null && temp !== null){
//     if(tempStack.top === null){
//       tempStack.push(temp); //push 9
//       temp = stack.top.value; // temp = 7
//     }
//     if(tempStack.top !== null && tempStack.top.value < temp){  //tempStack.top = 9 && 9 < 7
//       tempStack.push(temp);
//       temp = stack.pop();
//     } else{
//       stack.push(tempStack.pop()); // get rid 9
//       tempStack.push(temp); //push 7 to tempStack
//       temp = stack.pop();
//     }
//   }
//   if(stack.top === null){
//     stack.push(temp);
//     console.log('empty stack')
  
//   }
  
//   while(tempStack.top !== null){
//     stack.push(tempStack.pop());
    
//   }

//   return stack;
//   //if tempStack.top !== null and temp > tempStack.top.value
//   // then push temp to tempStack
//   // else  stack.push(tempStack.pop())
//   // if stack.top === null while tempStack.top !null push to stack
// }

// function sortingList(){
//   let list = new Stack;
//   list.push(1);
//   list.push(4);
//   list.push(3);
//   list.push(7);
//   list.push(9);
//   return list;
// }
// sortingList();

// display(sort(sortingList()));



function main(){
  let starTrek = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  peek(starTrek);
  isEmpty(starTrek);
  //Remove McCoy
  starTrek.pop();
  starTrek.pop();
  display(starTrek);
}
// main();

function q(){
  let starTrekQ = new Queue;
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  displayQ(starTrekQ);
}


function peekQ(stack){
  if(stack.first === null){
    console.log('Nothing here...');
    return null;
  }
  console.log(stack.first.value);
  return stack.first.value;
}
function isEmptyQ(stack) {
  if(stack.first === null){
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}
function displayQ(stack){
  let current = stack.first;
  while(current !== null){
    console.log(current.value);
    current = current.next;
  }
}


function qDLL(){
  let starTrekQ = new QueueDLL;
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  displayQ(starTrekQ);
}

// qDLL();


class QueueStack {
  constructor() {
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }
  enqueue(value){
    this.stack1.push(value);
  }

  dequeue(){
    if(peek(this.stack1) === null && peek(this.stack2) === null){
      return 'queue is empty';
    }
    while(peek(this.stack1) !== null){
      this.stack2.push(this.stack1.pop());
    }
  }
}

function displayQS(QS){
  let current = QS.top;
  while(current !== null){
    console.log(current.value);
    current = current.next;
  }
}

function QS(){
  let starTrekQS = new QueueStack;
  starTrekQS.enqueue('Kirk');
  starTrekQS.enqueue('Spock');
  starTrekQS.enqueue('Uhura');
  starTrekQS.enqueue('Sulu');
  starTrekQS.enqueue('Checkov');
  starTrekQS.dequeue();
  displayQS(starTrekQS.stack1);
  displayQS(starTrekQS.stack2);
}

// QS();

const dancePairs = [
  {
    gender: 'F',
    name: 'Jane'
  }, 
  {
    gender: 'M',
    name: 'Frank'
  },
  {
    gender: 'M',
    name: 'John'
  },
  {
    gender: 'M',
    name: 'Sherlock'
  },
  {
    gender: 'F',
    name: 'Madonna'
  },
  {
    gender: 'M',
    name: 'David'
  },
  {
    gender:  'M',
    name: 'Christopher'
  },
  {
    gender: 'F',
    name: 'Beyonce'
  },
];

function square(pairs){
  let w = new Queue;
  let m = new Queue;
  let result = '';
  for(let i = 0; i < pairs.length; i++){
    if(pairs[i].gender === 'F'){
      w.enqueue(pairs[i].name);
    } else{
      m.enqueue(pairs[i].name);
    }
  }
  while(w.first !== null && m.first !== null){
    result += `Female dancer is ${w.dequeue()}, and the male dancer is ${m.dequeue()};`;
  }
  if(m.first === null || w.first === null){
    let maleCount = 0;
    let femaleCount = 0;
    while(m.first !== null){
      m.dequeue();
      maleCount++;
    }
    while(w.first !== null){
      w.dequeue();
      femaleCount++;
    }
    if(maleCount !== 0){
      result += `There are ${maleCount} male dancers waiting to dance.`;
    }else {
      result += `There are ${femaleCount} female dancers waiting to dance.`;
    }
  }
  console.log(result);
  return result;
}

square(dancePairs);