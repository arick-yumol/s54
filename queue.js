let collection = [];

// Write the queue functions below.

function print() {
   return collection;
}

function enqueue(element) {
    // collection.push(element)	// do not use array methods
    // return collection;

    collection[collection.length] = element;	// puts the element parameter inside the index of collection[collection.length]
    return collection	// returns the array
}

function dequeue() {
    // collection.shift();	// do not use array methods
    // return collection;

    let newArray = []
    for (i = 0; i < collection.length; i++) {
    	newArray[i] = collection[i+1]	// the element on index collection[i+1] becomes the element on index newArray[i]. (e.g. i = 0; newArray[0] = collection[0+1])
    	collection = newArray	// newArray becomes collection
    }
    return collection;	// returns the array
}

function front() {
    return collection[0];	// returns the first element of the array
}

function size() {
   return collection.length;	// return the total number of elements inside the array
}

function isEmpty() {
    if (collection.length !== 0) {	// checks if the total number of elements inside the array is 0
    	return false	// array it not empty
    }
    else {
    	return true;	// array is empty
    }
}


module.exports = {
   collection,
    print,
    enqueue,
    dequeue,
    front,
    size,
    isEmpty
};