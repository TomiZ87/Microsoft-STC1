/** Importing classes and types from other files */
import division from "./division";
import nums from "./types";

/** Declaring some datatypes and variables for further use*/
let numbers: nums = { //Variable declared from type
    MAX_SAFE_INTEGER: 9007199254740991,
    caseinArray: false
}
let numArray: number[] = [];
let evenNumArray: number[] = [];
let evenNumArray4: number[] = [];
let evenNumArray6: number[] = [];
let evenNumArray8: number[] = [];
let evenNumArray10: number[] = [];
let oddNumArray: number[] = [];
let primeNumArray: number[] = [];
let randomNum;

/** 
 * Loop which until the number of fields in array is 100
 * It generate a number with the @function randomNum
 * The generated number is compared with all elements in array with the @function comparingNums
 * Depending on the @return of @function comparingNums the generated value is pushed into the array or not
 */
while (numArray.length != 100) {
    let randomNum = randomNumber(1 , numbers.MAX_SAFE_INTEGER);
    let caseinArray = comparingNums(numArray.length, randomNum);
    if (!caseinArray)
        numArray.push(randomNum);
        numbers.caseinArray = true;
}
/** The array is sorted from the lowest value to the highest value */
numArray = numArray.sort((num1,num2) => num1 - num2);


console.log('\x1b[33mNumber of elements in array: \x1b[36m'+ numArray.length)
/** Array gets converted into the string and is printed */
let allNums: string = numArray.toString();
console.log('\x1b[33mGenerated numbers: \x1b[36m' + allNums);

/** 
 * The @function division filters the generated numbers from array by chosen values to chosen array. 
 * The array gets converted into string and is printed. 
 * In this case, the array is filtered by partity (if it is divisible by 2 without the reminder)
 * (filters only even numbers)
 */
division.divisionNum(numArray, evenNumArray, numArray.length, 0, 2);
let evenNums: string = evenNumArray.toString();
console.log('\x1b[33mEven Numbers: \x1b[36m' + evenNums);
console.log('\x1b[33m2: \x1b[36m' + evenNums);

/** The same as above but is filtered if it is divisible by 4 without the reminder */
division.divisionNum(evenNumArray, evenNumArray4, evenNumArray.length, 0, 4);
let evenNums4: string = evenNumArray4.toString();
console.log('\x1b[33m4: \x1b[36m' + evenNums4);

/** The same as above but is filtered if it is divisible by 6 without the reminder */
division.divisionNum(evenNumArray, evenNumArray6, evenNumArray.length, 0, 6);
let evenNums6: string = evenNumArray6.toString();
console.log('\x1b[33m6: \x1b[36m' + evenNums6);

/** The same as above but is filtered if it is divisible by 8 without the reminder */
division.divisionNum(evenNumArray, evenNumArray8, evenNumArray.length, 0, 8);
let evenNums8: string = evenNumArray8.toString();
console.log('\x1b[33m8: \x1b[36m' + evenNums8);

/** The same as above but is filtered by parity (if it is divisible by 2 with the reminder) (filters only odd numbers) */
division.divisionNum(numArray, oddNumArray, numArray.length, 1, 2);
let oddNums: string = oddNumArray.toString();
console.log('\x1b[33mOdd Numbers: \x1b[36m' + oddNums);

/** Filters only prime numbers from odd numbers*/
primeNumArray = division.primeNumbers(oddNumArray, primeNumArray, oddNumArray.length);
let primeNums: string = primeNumArray.toString();
console.log('\x1b[33mPrime Numbers: \x1b[36m' + primeNumArray + '\x1B[31m(If the numbers arent showing and you see this text, then there are not prime numbers) \x1b[37m');
/**
* This function generates a random number between the max_num and min_num
* @param min_num - the minimal value of generated number
* @param max_num - the maximal value of generated number
* @returns - the generated number
*/
function randomNumber(min_num : number, max_num : number){
    return Math.floor(Math.random() * (max_num - min_num)) + min_num;
}

/**
* This function compare the value of generated number with all elements form the chosen array
* @param numOfRepeats1 - the number of times the for loop has to repeat, ussually it is array.length
* @param generatedNum - the number generated by function randomNumber
* @returns - true or false depending on if the generatedNum is found in array elements
*/
function comparingNums(numOfRepeats: number, generatedNum: number) {
    let comparing = false;
    for (let i: number = 0; i <= numOfRepeats; i++)
    {
        if(generatedNum == numArray[i])
        {
           comparing = true;
           break;
        }
    }
    if (comparing)
    return true;
    if (!comparing)
    return false;
}

/**
 * The same or similar could be in use by other Classmates of ŠTC because I helped and taught others. 
 * I am the original author of this version of code.
 */

/**
 * Colors of text in temnimal
 * 
 * YELLOW: \x1b[33m
 * CYAN: \x1b[36m
 * RED: \x1B[31m
 * WHITE: \x1b[37m
 */

