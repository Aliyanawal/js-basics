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
