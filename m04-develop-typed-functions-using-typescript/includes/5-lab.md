In this lab, you will convert some JavaScript functions to TypeScript.

## Exercise 1

The following JavaScript code contains three functions:

- `BuildArray` builds an array of unique random numbers. It accepts an `items` parameter that determines the number of items in the array and a `sortOrder` parameter that determines whether the array is sorted in ascending or descending order.
- `sortDecending` and `sortAscending` are comparison functions that tell the `sort()` method how to sort numbers in ascending or descending order.

Convert the functions to TypeScript with strongly typed parameters and return types:

1. Copy the JavaScript code into the Playground or a TypeScript file in your Visual Studio Code workspace.

   ```javascript
   function sortDescending(a, b) {
     if (a > b) {
       return -1;;
     } else if (b > a) {
       return 1;;
     } else {
       return 0;
     }
   }
   
   function sortAscending(a, b) {
     if (a > b) {
       return 1;
     } else if (b > a) {
       return -1;
     } else {
       return 0;
     }
   }
   
   function buildArray(items, sortOrder) {
       let randomNumbers = [];
       let nextNumber;
       for (let i = 0; i < items; i++) {
           nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
           if (randomNumbers.indexOf(nextNumber) === -1) {
             randomNumbers.push(nextNumber);
           } else {
             i--;
           }
       }
   
       if (sortOrder === 'ascending') {
         return randomNumbers.sort(sortAscending);
       } else {
         return randomNumbers.sort(sortDescending);
       }
   }
   
   let myArray1 = buildArray(12, 'ascending');
   let myArray2 = buildArray(8, 'descending');
   
   ```

2. In the `BuildArray` function, add types to parameter list, return value, and variables.
3. Convert the `sortDescending` and `sortAscending` functions to anonymous functions and assign them to variables of the same name. Add types to the parameter lists and return values for each function.
4. Declare a new function type for the `sortDescending` and `sortAscending` functions using either a type alias or an interface. Then, convert the `sortDescending` and `sortAscending` functions to anonymous functions, applying the new function type as the variable type.

## Exercise 2

This JavaScript function returns the payment amount for a loan.

1. Copy the JavaScript code into the Playground or a TypeScript file in your Visual Studio Code workspace.

   ```typescript
   function LoanCalc (principle, interestRate, numMonths) {
       let intr = interestRate / 1200;   // Calculates the monthly interest rate
       let pmt;
       pmt = principle * intr / (1 - (Math.pow(1/(1 + intr), numMonths)));
       return pmt.toFixed(2);
   }
   
   ```

2. Convert the `LoanCalc` function to TypeScript with strongly typed parameters, variables, and return types.
3. Make the `numMonths` parameter optional but assign it a default value of `12` months if omitted.

## Lab answers

You can find the answers to the lab exercises here. REVIEWER NOTE: I WILL REPLACE THIS WITH A LINK TO THE VSCODE WORKSPACE.

## Challenge yourself!

For an added challenge, take some existing JavaScript that you may have written or that you find on the web and re-write it in TypeScript using what you've learned about functions. You can copy and paste the JavaScript into the Playground and edit it or use another editor like Visual Studio Code.

