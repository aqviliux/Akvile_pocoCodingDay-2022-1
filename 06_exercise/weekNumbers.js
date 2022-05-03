// Write a function called *weekNumbersToWords* when given an input array of numbers 1-7,
//it outputs an array of the weeksdays
//  written out. You must use a switch, not if/else.
// Input: [1,4,6,3,2] <br>
// Output: ["Monday","Thursday","Saturday","Wednesday","Tuesday"]

const weekdaysArray = [1, 5, 6, 3, 9];

function weekNumbersToWords(array) {
    let weekNames = [];
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 1:
                weekNames.push("Monday");
                break;
            case 2:
                weekNames.push("Tuesday");
                break;
            case 3:
                weekNames.push("Wednesday");
                break;
            case 4:
                weekNames.push("Thursday");
                break;
            case 5:
                weekNames.push("Friday");
                break;
            case 6:
                weekNames.push("Saturday");
                break;
            case 0:
                weekNames.push("Sunday");
                break;
            default:
                weekNames.push("Out of the week");
        }
    }
    return weekNames;
}

console.log(weekNumbersToWords(weekdaysArray));
