function checkPrime(n){
    if(n<=1){
        return false;
    }
    if(n<=3){
        return true;
    }
    if(n%2==0||n%3==0){
        return false;
    }
    for(let i=5;i*i<=n;i+=6){
        if(n%i==0||n%(i+2)==0){
            return false;
        }
    }
    return true;
}


function storingPrimeNumber(n){
    let primeArr = [];
    for(let i=2;primeArr.length<n;i++){
        if(checkPrime(i)){
            primeArr.push(i);
        }
    }
    return primeArr;
}