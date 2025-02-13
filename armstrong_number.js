/* 
Task details

Write a program to print whether a given number is an Armstrong number or not..

(Armstrong number is a number in which all the sum of cubes of digits is equal to the number

Example:-

Input

n=153

Output

true



Logic - 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 1 +125 + 27 = 153 which is equal to the original number )



Input

123

Output

false



Logic - 123 is not an Armstrong number because 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36 which is not equal to the original number )



(Solve the following question in the compiler, make sure all test case passes and then click submit.)
*/


function armstrong(n){
    let sum =0;
    let temp = n;
    while(temp>0){
        let c = temp%10;
        sum=sum+c*c*c;
        temp = Math.floor(temp/10)  
    }
    if(n===sum){
        console.log(true);
    }else{
        console.log(false);
    }
}

armstrong(153);