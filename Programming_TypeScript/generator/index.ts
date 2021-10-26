const MAX_SAFE_INTEGER = 9007199254740991;
let randomNum = randomNumber(1 , MAX_SAFE_INTEGER);

function randomNumber(min_num : number, max_num : number){
    return Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;
}
console.log(randomNum);