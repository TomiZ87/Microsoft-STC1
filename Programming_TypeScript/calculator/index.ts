let myString = "5+4";
let splitted = myString.split("+")
let sum =splitted.reduce((a, b) =>  Number(a) +  Number(b), 0);
console.log(sum)



