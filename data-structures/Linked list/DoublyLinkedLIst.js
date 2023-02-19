// let myLinkedList = {
//     head: { value:   , next: }
// }

class Node{
	constructor(value){
		this.value = value;
		this.next = null;
        this.previous = null
	}
}

class DoublyLinkedList {
	constructor(value)
	{
		this.head = {
			value: value,
			next: null,
            previous: null
		}

		this.tail = this.head;
		this.length = 1
	}

	append(value)
	{
		const newNode = new Node(value)

        newNode.previous = this.tail
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value)
	{
		const newNode = new Node(value)

		newNode.next = this.head;
		this.head.previous = newNode;
		this.head = newNode;
		this.length++;
		return this;
	}

	printList()
	{
		const array =  [];
		let currentNode  = this.head;
		while(currentNode != null)
		{
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return array;
	}

	insert(index, value)
	{
		if(index === 0)
		{
			this.prepend(value);
			return this.printList();
		}

		if(index >= this.length)
		{
			return this.append(value);
		}

		const newNode = new Node(value);
		const leader = this.traverseToIndex(index-1);
		const follower = leader.next;
		leader.next = newNode;
		newNode.previous = leader
		newNode.next = follower;
		follower.previous = newNode;
		this.length++
		return this.printList()

	}

	traverseToIndex(index)
	{
		if(!this.printList(index))
		{
			console.log("Invalid index");
			return;
		}

		let counter = 0
		let currentNode = this.head;
		while(counter !== index)
		{
			currentNode = currentNode.next;
			counter++
		}

		return currentNode;
	}
	
	remove(index)
	{
		const leader = this.traverseToIndex(index-1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		leader.next.previous = leader;
		this.length--
		return this.printList();
	}

	reverse()
	{
		if (!this.head.next)
		{
			return this.head;
		}

		let first = this.head;
		this.tail = this.head
		let second = first.next

		while(second)
		{
			const temp =  second.next;
			second.next = first;
			first = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;

		return this.printList();
	}

	
}


const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(6)
myLinkedList.prepend(10)
myLinkedList.insert(1,99)

console.log(myLinkedList.reverse())