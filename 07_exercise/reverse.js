// Write a function that reverses a number: given a number, reverse its digits.

// Examples: <br>
// Input: 1234 <br>
// Output: 4321 <br> <br>
// Input: 100000000 <br>
// Output: 1 <br> <br>
// Input: -321 <br>
// Output: -123

function reverse(number) {
    let numString = number.toString();
    let stringArray = numString.split("");
    let reversedString = stringArray.reverse();
    let almostNumber = reversedString.join("");
    let numFloat = parseFloat(almostNumber);
    //need to add minus if it existed
    numFloat = numFloat * Math.sign(number);

    return numFloat;
}

console.log(reverse(-46985));
