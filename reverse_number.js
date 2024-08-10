/*
Task details:
Write a program to return the reverse of a number

Input
n=123
output
321
*/

function reverseNumber(n){
    let rev = 0;
    while(n>0){
        let rem = n%10;
        rev = rev*10+rem;
        n=Math.floor(n/10);
    }
    return rev;
}

let res = reverseNumber(123)
console.log(res);
