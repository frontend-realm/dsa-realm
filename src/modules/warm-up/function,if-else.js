//function in JS
// reuse facility in programming
// function declaration using function keyword
function printHelloworld() {
    console.log('heloo world');
}

//calling a function to execute the task
printHelloworld();

//parameter and argument example: dynamic functions
function greet(name) {  //setted a parameter a dynamic parameter which will take value
    console.log('greetings' + ' ' + name);
}

greet('Ritesh') // passed argument , actual value

// Task 1: Function that add two numbers
function sumOfNumber(num1, num2) {
    console.log(num1 + num2); // num1 and num2 are parameters of this function
}

sumOfNumber(5, 4); //arguments passing value or arguments as 5 and 4

//Return Statement -> using square example of a number

function squareNumber(num) {
    return num * num
}

squareNumber(4); //returning a output or a value of 16 by giving input 4.
//storing that value or output in a variable
let squaredNum1 = squareNumber(4);

console.log(squaredNum1);

//IF - ElSE Statement:
//if(true) {this statement or block will run}
// else {if false than this statement or block will run}

//Example 1: check eligibility  of person to vote 

function checkEligibilityToVote(name, age) {
    let minAge = 18
    if (age < 0) {
        console.log('Invalid Input')
    } else if (age > minAge) {
        console.log(name + ' ' + 'eligible to vote')
        
    } else {
        console.log(`${name} is not eligible to vote`)
    }
}

checkEligibilityToVote('Ritesh', -1);
checkEligibilityToVote('Ramesh', 25);
checkEligibilityToVote('Geeta', 5)

//Example 2: Check a number is Even or odd:

function checkEvenOrOdd(num) {
    if (num % 2 == 0) {  // num % anyNum is equal to remainder 
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`)
    }
}

checkEvenOrOdd(4)