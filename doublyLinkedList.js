class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtStart(data) {
    if (this.size === 0) {
      const node = new Node(data, this.head);
      this.head = node;
    } else {
      const node = new Node(data, this.head);
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  inserAtEnd(data) {
    const node = new Node(data);
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    node.prev = current;
    this.size++;
  }

  insertAtIndex(data, index) {
    const node = new Node(data);
    let leader = this.traversal(index - 1);
    let holding = leader.next;
    node.next = holding;
    holding.prev = node;
    leader.next = node;
    node.prev = leader;
    this.size++;
  }

  deleteAtStart() {
    let current = this.head;
    this.head = current.next;
    current.next = null;
    this.head.prev = null;
    this.size--;
  }

  deleteAtLast() {
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }

  deleteAtIndex(index) {
    const leader = this.traversal(index - 1);
    leader.next = leader.next.next;
    leader.next.prev = leader;
    this.size--;
  }

  traversal(index) {
    let current = this.head;
    let counter = 0;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
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
const d2 = new DoublyLinkedList();
d2.insertAtStart(1);
d2.insertAtStart(2);
d2.inserAtEnd(3);
d2.insertAtIndex(2, 2);
d2.deleteAtStart();
d2.deleteAtLast();
d2.inserAtEnd(3);
d2.inserAtEnd(4);
d2.deleteAtIndex(2);
console.log(d2.printData());
