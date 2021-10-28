/**
 * Class witch constain the funtions to be used in another file/the prototype functions
 */
class division {
    /**
     * The function filters the numbers from an array if they are divisible by certain numbers with or without remainder and adds them to the chosen array
     * If the number is divisible by the chosen divider and has the certain remainder, then is added to the chosen resultArray
     * @param fromArray - the array from which are the initial values filtered
     * @param resultArray - array to where will be the filtered values added
     * @param numOfRepeats - the number of how many times has the loop repeat, usually it is the lenght of a fromArray (fromArray.lenght)
     * @param remainder - the number determine which remainder (how many has to remain) has to result by dividing the number (divider)
     * @param divider - the number by which will be the values divided (tested for)
     * @returns 
     */
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
    /**
     * The function filters the prime numbers from an array and adds them to the resultArray
     * @param fromArray - the array from which are the initial values filtered
     * @param resultArray - array to where will be the filtered values added
     * @param numOfRepeats  - the number of how many times has the loop repeat, usually it is the lenght of a fromArray (fromArray.lenght)
     * @returns 
     */
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

/** Exports the @class, so it can be used in another file in the project */
export default division;