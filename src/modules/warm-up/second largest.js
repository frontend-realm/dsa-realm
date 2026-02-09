// Second Largest

// Task: Find the Second Largest Number In the given Array:
function secondLargestNumber(arr) {
    if (arr.length < 2) return null;
    let firstLargestNumber = -Infinity;
    let secondLargestNumber = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargestNumber) {
            secondLargestNumber = firstLargestNumber;
            firstLargestNumber = arr[i];
        } else if (arr[i] > secondLargestNumber && arr[i] != firstLargestNumber) {
            //arr[i] != firstLargestNumber to fix duplication edge case
            secondLargestNumber = arr[i];
        }
    }
    return secondLargestNumber
}

let arr = [10,20,20];
console.log(secondLargestNumber(arr))