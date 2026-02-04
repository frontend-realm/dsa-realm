// Loops 1:
//concept ->
//** FOR LOOP : EXplanation
// I) Running loop  -> For loop :
//let i = 0 // -> initialisation first
//i < 5 // condition -> condition check if true than goes inside the statement
//i ++ increment by 1 -> after the statement runs increase the variable we initialise by 1
//Increment By 1 -> [i++ = (i = i + 1)]

for (let i = 0; i < 5; i++) {
    console.log('Hello world ', i);
}

/*
for i = 0 -> hello world 0
for i = 1 -> hellow world 1
..
..
for i = 4 -> hello world 4
when i increase by 1 and becomes i = 5 condition false will not go to the statement inside and loop breaks or loop ends
*/


//Output question on -> For Loop :
// a) Easy Level
for (let i = 3; i < 5; i++) {
    console.log("hello world", i)
}

//b) Easy Level
for (let i = 2; i < 9; i = i + 2) {
    console.log('Hello world', i)
}

//c) Easy Level -> Reverse Loop
for (let i = 5; i > 0; i--) {
    console.log('reverse loop hellow print', i)
}

//d) Easy Level:
for (let i = 5; i < 4; i++) {
    console.log('tricky one ', i)
}

//e) Easy Level:
function greet() {
    console.log('grettings to you sir')
}

for (let i = 0; i < 5; i++) {
    greet();
}

// concept -> For Loop and Array:

let arr1 = [5, 10, 44, 23, 55, 3, 53, 55];
//finding length of an array:
let length = arr1.length;
console.log(length, "length of arr1");
//iterating through the array to read all the values inside the array:
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i], "iteration arr1");
};

//Task 1: Print all the even numbers in an array:

let arr2 = [2, 5, 3, 10, 6, 7, 8, 12, 9, 13, 55, 44];

for (let i = 0; i < arr2.length; i++) {
    if ((arr2[i] % 2 == 0)) {
        console.log(arr2[i], "Even Numbers");
    }

    // to print odd numbers :
    //just add a !(arr2[i] % 2 == 0) it will print all the even numbers
}

// concept-> While Loop:

//just like for loop : flow
//initialisation -> condition -> statement block -> increment at end

let i = 0;   //initialisation
while (i < 6) { //condition
    console.log('while loop'); //block statement
    i++ // increment at end
}