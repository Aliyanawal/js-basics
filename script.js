function checkEvenOdd(){
    const number= document.getElementById("numberInput").value;

    if (number==""){
        document.getElementById("result").innerHTML = 'Please Enter a Number';

    }else if(number%2 == 0){
        document.getElementById('result').innerHTML = 'Even Numver';
    }else{
        document.getElementById('result').innerHTML = 'odd number';
    }
}

function checkLeapYear(){
    const year = document.getElementById("yearInput").value;

    if ((year%4 == 0 && year % 100 != 0) || year % 400 == 0){
        document.getElementById("yresult").innerHTML = "Leap year"
    }else{
        document.getElementById("yresult").innerHTML = "not a leap year"
    }

}

function sumOfDigits(){
    const num = document.getElementById("digitInput").value;
    let sum = 0;
   
    for (let digit of num){
         if(!isNaN(digit)){
            sum += parseInt(digit);
     }
    }
    document.getElementById("dresult").innerHTML = sum;
}

function checkPrime() {
    const number = parseInt(document.getElementById("primeInput").value);

    if (isNaN(number) || number < 2) {
        document.getElementById("presult").innerHTML = "Enter a number greater than 1.";
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            document.getElementById("presult").innerHTML = number + " is not a Prime number.";
            return;
        }
    }

    document.getElementById("presult").innerHTML = number + " is a Prime number.";
}

function calculateFactorial() {
    const number = parseInt(document.getElementById("factorialInput").value);

    if (isNaN(number) || number < 0) {
        document.getElementById("fresult").innerHTML = "Please enter a non-negative number.";
        return;
    }

    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    document.getElementById("fresult").innerHTML = "Factorial of " + number + " is " + result;
}
