// Write a function called *getLastValue*.
//  Pass an array of strings to the function,
//  which sorts the strings alphabetically and returns the last element.

// Example: <br>
// Input: ["Monday","Thursday","Saturday","Wednesday","Tuesday"] <br>
// Output: Wednesday

const inputArray = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];
function getLastValue(array) {
    array.sort();
    let lastIndex = array.length - 1;
    let lastValue = array[lastIndex];

    return lastValue;
}

console.log(getLastValue(inputArray));
