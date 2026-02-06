//loops - 2:
//search an element in array:
// Task 1: write a function that searches for an element in an array and returns the index where it is found, if the element is not present then just return -1
function searchElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}

let arr = [3, 2, 1, 4, 5, 6, 10, 33];
let result = searchElement(arr, 6);
console.log(result);

// mistake i made on start : I added [return -1] on making an else block statment [return (-1)] that means if there is a return statemnt in the block and condition is mismatch or matched the return will execute and makes the function stops immediately and doesnot goes to next line.

//return statement:
function name() {
    if (true) { //condtion true 
        console.log('return')
        return
    }
    console.log('hwllo') //didn't print
}
name();

//Task 2: Write a function that returns the number of negative numbers in an array.
//test case or sample case:
let arrNumber = [2, -9, 17, 0, -1, -10, -9];

function countNegativeNumbers(arr) {
    // let negativeArrNum = []; //its not a mistake i was creating an array and marking its length
    //counter technique // optimal 
    let count = 0 // on first there is no negative numbers count zero
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            // negativeArrNum.push(arr[i]); //creating a separate negative numbers array
            count = count + 1;  //increment the count 
        }
    }
    // console.log(negativeArrNum.length) //printing the length of that negative numbers array
    console.log(count)
}

countNegativeNumbers(arrNumber);

// Task 3: Write a function that returns the largest number and smallest number in an array
//find largest
function findLargest(arr) {
    let largest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) { //comparing with the least possible smallest number to get largest
            arr[i] = largest;
        }
    }

    return largest;

}

let numArray = [6, 12444444444444, 44, 3, 2, 11, 1111, 2222242];

console.log(findLargest(numArray))

// find smallest
function findSmallest(arr) {
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) { // comparing with most possible largest number to get smallest
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(findSmallest(numArray))