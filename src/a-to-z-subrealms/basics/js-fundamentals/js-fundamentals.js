'use strict'

// i) Variables and Use Strict:

  //Use Strict:
    let x = 10; // earlier it sets to global object -> window.x but after adding strict mode it will treates as. 
    console.log(x)

  //variables:
    let message; // variable message -> declaration of variable.
    message = 'sent data' //assigning value to variable.

    let numberA = 1; // declaration and assigning the variable at same time.

    const COlOR_RED = 'red color' // constants the value and variable which is constant in entire application which cannot be changed.

// ii) Data types:

   //js is dynamically types
   let userName = 'Ritesh' // data type is string here. 
   userName = 12 //data type is number.
   console.log(userName)// from string data type changes to number so you can store any thing in the variable it doesnot matters if you changes it to other data type.

   //Primitive Data Type: By Value
   //1) Number : number
   // regular number and special numeric values.
   //Infinity, -Infinity, and NaN -> these are (special numeric values).

   //2) BigInt: bigint
   let bigInt = 1234434343n
   console.log(typeof bigInt)

   //3) String: string
   let nameOfSheep = "corey";
   let nameOfDog = 'jerry';
   let goodFreinds = `${nameOfSheep} and ${nameOfDog} are really good freinds`;
   console.log(goodFreinds);

   //4) Boolean: boolean
   let nameOfStudent = "Rakesh";
   let age = 18;
   console.log(`${nameOfStudent} has ${age > 20 } can drive`)

   //5) Null 
   let nameOfStudentA = null;
   console.log(nameOfStudentA) // means empty or nothing is assigned to the variable.

   //6) Undefined
   let nameOfStudentB;
   console.log(nameOfStudentB); // means the variable is just declared and its initial value is not assigned to it.

   //Non-primitive Data Type : By Reference
   let obj = {name: 'ritesh'}
   console.log(obj.name)

   //Type Of Operator:
   console.log(typeof null)

// iii) Type Conversions:
   
   //String Conversion -> converting values to string
   console.log(typeof String(true), typeof String(NaN), typeof String(112121n));

   //Number Conversion -> converting to numbers;
   console.log(Number(''), Number(undefined), Number(NaN), Number('123234'), Number('123243Ritesg'));

   //Boolean Conversion -> Converting Values to Numbers 
   console.log(Boolean(undefined), Boolean(NaN), Boolean(''), Boolean(null), Boolean(1));

// iv) Basic Operators and Maths:

   //string Concatenation:
   console.log(2+2+'1'+2+2, '4' - 1); // conversion to sting
   console.log(+'1') // conversion to number 

   // Assignment Operater:
   let assignmentOperator = 2;
   console.log(assignmentOperator);

   let a,b,c;
   a=b=c=assignmentOperator;//chaining assignment
   console.log(a,b,c);

   let n = 6;
   n += 5 //-> n = n + 5;
   console.log(n)

   //Increment and Decrement:
   // console.log(5++) -> only valid  in variables;
   let counter = 2;
   // counter++;
   console.log(counter++); //returns old value i.e.;2
   console.log(++counter); //returns new value 3

   //Bitwise Operator: &&, ||, !

// v) comparisons:
   console.log(5>6,5<6,5!=6,5==5);
   //strict equality:
   console.log('5'== 5); //loose equality check which cause implicit type change. 
   console.log('5' === 5); //strict equality check which prevents from implicit type change.

// vi) Conditional branching:
   // if else block:
   // null,undefined,'',NaN,0 are falsy values
   
   let ageOfDriver = 20;

   if(ageOfDriver === 20) {
      console.log('best driver')
   } else if(ageOfDriver > 18) { // once the uper statement is true it will not execute the next statement it will stops executing once it finds the first condition is true
      console.log('he can dive')
   } else {
      console.log('cannot drive not safe')
   }

// vii) Logical operator:

   //|| OR, && And , ! Not operator;

   let isSunny = true;
   let isWeekend = false;

   if(isSunny || isWeekend) {
      console.log('go beach')
   }

   if(isSunny && isWeekend) {
      console.log('relaxed')
   }

   if(!isSunny) {
      console.log(isWeekend)
   }

   // Nullish coaliscing operator: ??
   let isUsername = null;
   console.log(isUsername ?? 'Vishal') // null/undefined if isUsername than it will give you defined value 

// viii) Loops  -> While and For:
   // -While loop:

   let i = 0;

   while(i<=3) {
      console.log(i);
      i++
   }

   //for loop:

   for(let i=0; i<3; i++) {
      console.log(i,'for')
   }
   /*Run begin
      → (if condition → run body and run step)
      → (if condition → run body and run step)
      → (if condition → run body and run step)
      → ... */

// ix) The switch statement:
   let btnText = 'cancel';
   switch(btnText) {
      case 'cancel' :
         console.log('cancel event');
         break;

      case 'submit' :
         console.log('submit event');
         break;

      case 'reset' : 
      console.log('resetting event');
      break;
   }