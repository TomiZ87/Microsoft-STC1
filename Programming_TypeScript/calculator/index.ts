import readline from "readline-sync"; //Firstly we imported the module which enables us to use input
// In this calculator you enter 2 numbers and a operator and the calculator will calculate the equation for you
const firstNumber = readline.questionFloat("Enter the first number: "); //Then I created a series of 3 question, the 2 numbers and the operator between them
const operator = readline.question("Enter the operator: ", {limit: ['+', '-', '*', '/']}) //Also I limited, which operators can be used
const secondNumber = readline.questionFloat("Enter the second number: ") //the input is automatically numbers becuase of readline.questionFloat
let result = 0; // The default setting for our result will be 0

switch(operator) //After all necessary data is taken, I used the switch to decide which operator will be used for the equation
{
    case '+':  //If the operator is +, then the addition will happen.
        result=firstNumber+secondNumber; //I did the equation by appling the case
        console.log("Result: " + (firstNumber) + (operator) + (secondNumber) + "=" + (result)); // then I printed the calculated equation
        break; //to not repeat the duplication of equation with other operator, I closed the switch
    case '-': //If the operator is -, then the substraction will happen.
        result=firstNumber-secondNumber;
        console.log("Result: " + (firstNumber) + (operator) + (secondNumber) + "=" + (result));
        break; 
    case '*': //If the operator is *, then the multiplication will happen.
        result=firstNumber*secondNumber;
        console.log("Result: " + (firstNumber) + (operator) + (secondNumber) + "=" + (result));
        break; 
    case '/': //If the operator is /, then the division will happen.
        result=firstNumber/secondNumber;
        console.log("Result: " + (firstNumber) + (operator) + (secondNumber) + "=" + (result));
        break; 
    /*default: //If none of the previous operators are used, then this option is called; but is bug-proof/unnecessary now because of the limit in the readline.question
        console.log("Invalid operator (allowed operators '+', '-', '*', and '/')")*/

}



// The code below is a fail while coding the one line calculator and analyzing the equation
/*
let myString = "5+4";
let splitted = myString.split("+")
let sum =splitted.reduce((a, b) =>  Number(a) +  Number(b), 0);
console.log(sum)
*/