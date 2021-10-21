let collection = [];

// Write the queue functions below.

function print() {
   return collection;
}

// adds element to the rear of the queue
function enqueue(element) {
    // collection.push(element)	// do not use array methods
    // return collection;

    // const newElement = element.split(' ')	// works but does not retain elements inside the array
    // collection = newElement; 	// works but does not retain elements inside the array
    // return collection;	// works but does not retain elements inside the array

    collection[collection.length] = element;	// puts the element parameter inside the index of collection[collection.length]
    return collection;	// returns the array
}

// remove element
function dequeue() {
    // collection.shift();	// do not use array methods
    // return collection;

    let newArray = []
    for (i = 0; i < collection.length; i++) {
    	newArray[i] = collection[i+1]	// the element on index collection[i+1] becomes the element on index newArray[i]. (e.g. i = 0; newArray[0] = collection[0+1])
    	collection = newArray	// newArray becomes collection
    }

    /*	// Ma'am Judy Lyn Medalla's code
    let newCollection = []
    for (i = 1; i < collection.length; i++) {
    	newArray[i - 1] = collection[i]	// the element on index collection[i] becomes the element on index newCollection[1-i]. (e.g. i = 0; newCollection[1-0] = collection[0])
    	collection = newCollection	// newCollection becomes collection
    }
    */

    return collection;	// returns the array
}

// shows element at the front
function front() {
    return collection[0];	// returns the first element of the array
}

// show total number of elements
function size() {
   return collection.length;	// return the total number of elements inside the array
}

// output a boolean value describing whether queue is empty or not
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