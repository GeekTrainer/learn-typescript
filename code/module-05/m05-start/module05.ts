/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/*  EXERCISE 1
    TODO: Convert the three functions to a new class called BuildArray by defining the 
    properties, constructor, and accessors, converting the sortAscending2 and sortDescending2
    functions to private methods of the class, and converting the buildArray2 function to
    a public method of the class. */

/*  sortDescending2 is a comparison function that tells the sort method how to sort numbers
    in descending order. */
let sortDescending2 = (a: number, b: number) => {
    if (a > b) {
        return -1;;
    } else if (b > a) {
        return 1;;
    } else {
        return 0;
    }
}

/*  sortAscending2 is a comparison function that tells the sort method how to sort numbers 
    in ascending order. */
let sortAscending2 = (a: number, b: number) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

/*  buildArray2 builds an array of unique random numbers containing the number of items 
    based on the number passed to it. The sortOrder parameter determines whether to sort 
    the array in ascending or descending order. */
function buildArray2(items: number, sortOrder: 'ascending' | 'descending'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let i = 0; i < items; i++) {
        nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        } else {
            i--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending2);
    } else {
        return randomNumbers.sort(sortDescending2);
    }
}

/*  TODO: Update the testArray1 and testArray2 variable declarations to instantiate 
    new BuildArray objects. Call the buildArray2 method on the objects and return the 
    result to the console. */

let testArray1 = buildArray2(12, 'ascending');
let testArray2 = buildArray2(8, 'descending');
console.log(testArray1);
console.log(testArray2);