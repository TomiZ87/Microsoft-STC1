const MAX_SAFE_INTEGER = 9007199254740991;
let numArray: number[] = [];
let evenNumArray: number[] = [];
let evenNumArray4: number[] = [];
let evenNumArray6: number[] = [];
let evenNumArray8: number[] = [];
let evenNumArray10: number[] = [];
let oddNumArray: number[] = [];
let primeNumArray: number[] = [];
let randomNum;
let caseinArray = false;

while (numArray.length != 100) {
    let randomNum = randomNumber(1 , MAX_SAFE_INTEGER);
    let caseinArray = comparingNums(numArray.length, randomNum);
    if (!caseinArray)
        numArray.push(randomNum);
        caseinArray = true;
}

numArray = numArray.sort((num1,num2) => num1 - num2);
let allNums: string = numArray.toString();
console.log("Generated numbers: " + allNums);

divisionNum(numArray, evenNumArray, numArray.length, 0, 2, 0);
let evenNums: string = evenNumArray.toString();
console.log("Even Numbers: " + evenNums);
console.log("2: " + evenNums);

divisionNum(evenNumArray, evenNumArray4, evenNumArray.length, 0, 4, 0);
let evenNums4: string = evenNumArray4.toString();
console.log("4: " + evenNums4);

divisionNum(evenNumArray, evenNumArray6, evenNumArray.length, 0, 6, 0);
let evenNums6: string = evenNumArray6.toString();
console.log("6: " + evenNums6);

divisionNum(evenNumArray, evenNumArray8, evenNumArray.length, 0, 8, 0);
let evenNums8: string = evenNumArray8.toString();
console.log("8: " + evenNums8);

divisionNum(numArray, oddNumArray, numArray.length, 1, 2, 0);
let oddNums: string = oddNumArray.toString();
console.log("Odd Numbers: " + oddNums);

primeNumArray = primeNumbers(oddNumArray, primeNumArray, oddNumArray.length);
let primeNums: string = primeNumArray.toString();
console.log("Prime Numbers: " + primeNumArray);

function primeNumbers (fromArray:number[], resultArray: number[], numOfRepeats: number)
{ 
    for (let i: number = 0; i <= numOfRepeats; i++)
    {
        let isPrime = true;
        for (let j: number = 2; j * j < fromArray[i]; j++) {
            if(fromArray[i] % j == 0 )
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            resultArray.push(fromArray[i]); 
        }
    }
    return resultArray;
}
function randomNumber(min_num : number, max_num : number){
    return Math.floor(Math.random() * (max_num - min_num)) + min_num;
}
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

function divisionNum(fromArray:number[], resultArray: number[], numOfRepeats: number, remainder: number, divider: number, i: number) {
    for (let i: number = 0; i <= numOfRepeats; i++)
    {
      if(fromArray[i] % divider == remainder)
      {
        resultArray.push(fromArray[i]);
      }  
    }
    return resultArray;
}