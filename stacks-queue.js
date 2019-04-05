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

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stacki = new Stack;
  let stackj = new Stack;
  for(let i = 0;i < s.length; i++){
    stacki.push(s[i]);
  } 
  for(let j = s.length-1;j >= 0; j--){
    stackj.push(s[j]);
  } 

  while(stacki.top !== null){
    if(stacki.top.value !== stackj.top.value){
      return false;
    }
    stacki.pop();
    stackj.pop();
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

matchParens('abc(asdf)asdflkj');
matchParens('asdflkjqwer)');
matchParens('asldkjfqwer(adflk');

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