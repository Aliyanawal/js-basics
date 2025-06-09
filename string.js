function getText(){
    return document.getElementById("textInput").value
}

function countVowels(){
    const text = getText().toLowerCase();
    let count = 0;
    const vowels = ['a' , 'e', 'i', 'o', 'u'];
    for(let char of text){
        if(vowels.includes(char)){
            count++;
        }
    }
    
    document.getElementById("vowelsResult").innerHTML= "Vowels:" + count;
}

function toTitleCase(){
    const text = getText().toLowerCase();
   
    titleCaseText = text.charAt(0).toUpperCase() +  text.slice(1).toLowerCase();
   
    document.getElementById("titleResult").innerHTML = titleCaseText;
}

function checkPalindrome(){
    const text = getText().toLowerCase();
    const reversed = text.split('').reverse().join('');
    const isPalindrome = text === reversed;
    document.getElementById("palindromeResult").innerHTML = isPalindrome? "it is a palindrome " : "it is not a palindrome";

}

function capitalizeWords(){
    const text = getText()
    const capText = text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    document.getElementById("capitalizedResult").innerHTML = capText;
}

function removeDuplicates(){
    const text = getText();
    let result = "";
    for (let char of text){
        if (!result.includes(char)){
            result += char;
        }
    }
     document.getElementById("duplicateResult").innerHTML = result;

}

function checkIncludes(){
    const text = getText();
    const w = document.getElementById("word").value
    const result = text.includes(w)? "contains the word " + w :" Does not contain the word " + w

    
    document.getElementById("includesResult").innerHTML = result;
}

function extractPart(){
    const text = getText();
    const slicedPart = text.slice(5);
    const substringPart = text.substring(5,10);

     document.getElementById("extractResult").innerHTML = "sliced part: " + slicedPart + ", substring part: " +  substringPart;
}

function trimWhitespace(){
    const text = getText();
    result = text.trim();


    document.getElementById("trimResult").innerHTML = result;

}

function splitToWords(){
    const text = getText();
    const result = text.trim().split(" ").join(",");

     document.getElementById("splitResult").innerHTML = result;

}