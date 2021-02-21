class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtStart(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.size++;
  }

  insertAtEnd(data) {
    let current = this.head;
    const node = new Node(data);
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }

  insertAtIndex(data, index) {
    const node = new Node(data);
    const leader = this.traversal(index - 1);
    const holding = leader.next;
    leader.next = node;
    node.next = holding;
    this.size++;
  }

  traversal(index) {
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  deleteAtStart() {
    let current = this.head;
    this.head = current.next;
  }

  deleteAtLast() {
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }
  deleteAtIndex(index) {
    const leader = this.traversal(index - 1);
    leader.next = leader.next.next;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    while (current !== null) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    this.head = prev;
  }
  removeDuplicate() {
    let current = this.head;
    while (current.next !== null) {
      if (current.data === current.next.data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  printData() {
    let result = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}

const l1 = new LinkedList();
l1.insertAtStart(1);
l1.insertAtEnd(2);
l1.insertAtEnd(3);
l1.insertAtEnd(3);
l1.removeDuplicate();
console.log(l1.printData());
