In this lab, you'll apply what you've learned about classes to convert a TypeScript function to a class.

## Exercise 1

The following TypeScript code contains three functions:

- `BuildArray2` builds an array of unique random numbers. It accepts an `items` parameter that determines the number of items in the array and a `sortOrder` parameter that determines whether the array is sorted in ascending or descending order.
- `sortDecending2` and `sortAscending2` are comparison functions that tell the `sort()` method how to sort numbers in ascending or descending order.

Convert the functions to a TypeScript class:

1. Copy the TypeScript code into the [Playground](https://www.typescriptlang.org/play) or a TypeScript file in your Visual Studio Code workspace.

    ```typescript
    // Comparison function that tells the sort method how to sort numbers in descending order
    let sortDescending2 = (a: number, b: number) => {
        if (a > b) {
            return -1;;
        } else if (b > a) {
            return 1;;
        } else {
            return 0;
        }
    }
    
    // Comparison function that tells the sort method how to sort numbers in ascending order
    let sortAscending2 = (a: number, b: number) => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    }
    
    // This function builds an array of unique random numbers containing the number of items based on the number passed to it.
    // The sortOrder parameter determines whether to sort the array in ascending or decending order.
    
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
    
    let testArray1 = buildArray2(12, 'ascending');
    let testArray2 = buildArray2(8, 'descending');
    console.log(testArray1);
    console.log(testArray2);
    ```

2. Create a new class called `BuildArray`.
3. Define the properties in the class: `_items` and `_sortOrder`.
4. Define the class `constructor` for the properties.
5. Define the accessors for the `items` and `sortOrder` parameters.
6. Convert the `sortAscending2` and `sortDescending2` functions to `private` methods in the class.
7. Convert the `buildArray2` function to a `public` method in the class.
8. Update the `testArray1` and `testArray2` variable declarations to instantiate new `BuildArray` objects.
9. Call the `buildArray2` method on the objects and return the result to the console.

## Lab answers

You can find the answers to the lab exercises here. [REVIEWER NOTE: I WILL REPLACE THIS WITH A LINK TO THE VSCODE WORKSPACE.]

## Challenge yourself!

For an added challenge, take some existing JavaScript that you may have written or that you find on the web and re-write it in TypeScript using what you've learned about classes. You can copy and paste the JavaScript into the Playground and edit it or use another editor like Visual Studio Code.

