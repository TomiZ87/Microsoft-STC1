class division {
    public static divisionNum(fromArray: number[], resultArray: number[], numOfRepeats: number, remainder: number, divider: number) {
        for (let i: number = 0; i <= numOfRepeats; i++)
        {
          if(fromArray[i] % divider == remainder)
          {
            resultArray.push(fromArray[i]);
          }  
        }
        return resultArray;
    }
    public static NumToString(resultArray: number[]) {
        return resultArray.toString();
    }
    public static primeNumbers (fromArray:number[], resultArray: number[], numOfRepeats: number)
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
}
export default division;