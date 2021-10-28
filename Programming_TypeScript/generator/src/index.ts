import division from "./division";
import nums from "./types";
let numbers: nums = {
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

while (numArray.length != 100) {
    let randomNum = randomNumber(1 , numbers.MAX_SAFE_INTEGER);
    let caseinArray = comparingNums(numArray.length, randomNum);
    if (!caseinArray)
        numArray.push(randomNum);
        numbers.caseinArray = true;
}

numArray = numArray.sort((num1,num2) => num1 - num2);

let allNums: string = numArray.toString();
console.log("Generated numbers: " + allNums);

division.divisionNum(numArray, evenNumArray, numArray.length, 0, 2);
let evenNums: string = evenNumArray.toString();
console.log("Even Numbers: " + evenNums);
console.log("2: " + evenNums);

division.divisionNum(evenNumArray, evenNumArray4, evenNumArray.length, 0, 4);
let evenNums4: string = evenNumArray4.toString();
console.log("4: " + evenNums4);

division.divisionNum(evenNumArray, evenNumArray6, evenNumArray.length, 0, 6);
let evenNums6: string = evenNumArray6.toString();
console.log("6: " + evenNums6);

division.divisionNum(evenNumArray, evenNumArray8, evenNumArray.length, 0, 8);
let evenNums8: string = evenNumArray8.toString();
console.log("8: " + evenNums8);

division.divisionNum(numArray, oddNumArray, numArray.length, 1, 2);
let oddNums: string = oddNumArray.toString();
console.log("Odd Numbers: " + oddNums);

primeNumArray = division.primeNumbers(oddNumArray, primeNumArray, oddNumArray.length);
let primeNums: string = primeNumArray.toString();
console.log("Prime Numbers: " + primeNumArray);
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
* This function
* @param numOfRepeats1
* @param generatedNum
* @returns
*/
function comparingNums(numOfRepeats1: number, generatedNum: number) {
    let comparing = false;
    for (let i: number = 0; i <= numOfRepeats1; i++)
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

