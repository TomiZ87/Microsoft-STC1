const MAX_SAFE_INTEGER = 9007199254740991;
let numArray: number[] = [];
let evenNumArray: number[] = [];
let oddNumArray: number[] = [];
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
console.log("Generated numbers: " + allNums)
parityNum(numArray, 100, 0, evenNumArray)
console.log(evenNumArray);
parityNum(numArray, 100, 1, oddNumArray)
console.log(oddNumArray);

function randomNumber(min_num : number, max_num : number){
    return Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;
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

function parityNum(fromArray: number[], numOfRepeats1: number, remainder: number, resultArray: number[]) {
    for (let i: number = 0; i <= numOfRepeats1; i++)
    {
      if(fromArray[i] % 2 == remainder)
      {
        resultArray.push(fromArray[i]);
      }  
    }
    return resultArray;
}