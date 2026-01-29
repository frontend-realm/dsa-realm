// i) Basics
console.log('hello worlds'); //printing String
console.log(7) // printing number 
console.log(true) // printing boolean

//ii) Data Types
// "hello" -> string in js
// 7 -> Number in Js
// true , false  -> boolean in js

//iii) Variables -> storing values 

//sum example:
// a)data type : Number
let a = 7; //a is a variable storing 7 which type is number (data type)
let b = 9;
let sum = a + b;
console.log(sum)

//b)data type : string: concatenation
let firstName = 'Ritesh';
let lastName = 'Ranjan';

console.log(firstName + ' ' + lastName);

//this how we can comment out any code;

// c)String + Number -> converting number to string)

//converting number type to string
let stringExample = 'stringexample'
let numberExample = 8;
let converToString = stringExample + numberExample;

console.log(converToString);

//custom function to change a type number to string ;
// similar functionality like String() -> which converts type number to string;
let typeFunc = 8;
console.log(typeof a)

typeFunc = ConvertString(typeFunc)
console.log(typeof typeFunc)

function ConvertString(value) {
    return ' ' + value
}

// converting string to Number: Number()
Number("123");      // 123
Number("12.5");     // 12.5
Number("123abc");   // NaN
Number("");         // 0

console.log(typeof +'1234', " -> convert string to number using uniary operator")

// iv) Arrays - Data type:
//array of number same as there will be array of strings as well
let arr1 = [23, 4, 23, 44, 12];
//index starting from 0 
console.log(arr1[0]);//accessing the value 
let sumOfNumberInArr = arr1[2] + arr1[3];

console.log(sumOfNumberInArr)
console.log(arr1[5], " -> if on index 5 there is no value in this array -> arr1 so it will throw undefined while accessing");

//mixed value can be also stored in a array of any data type:
let arr2 = [1, "Ritesh", true];
//array can contain array as well nested array;
let arr3 = [1, "nested", [1, 2]];
console.log(arr3[2][0], " -> printing nested array values acessing");

// v) Objects in JS
//key: value -> pair {};

let obj1 = {
    name: 'Ritesh Ranjan',
    isDisabled: 'false',
    age: 12
}

console.log(obj1.isDisabled) //accessing values from the object