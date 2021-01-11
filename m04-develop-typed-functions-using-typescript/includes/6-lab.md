In this lab, you will convert some JavaScript functions to TypeScript.

## Lab setup

You can use the TypeScript [Playground](https://www.typescriptlang.org/play) or Visual Studio Code to complete this lab.

### Playground

If you’re using the Playground, copy and paste the starting code into it as directed in the lab instructions.

### Visual Studio Code

If you’re using an existing Visual Studio Code workspace, add a new file named **module04.ts** to your project and copy and paste the starting code into it as directed in the lab instructions.

You can also download the starting workspace at [LINK TO \code\module-04\m04-start] and edit the file **module04.ts**. To run the solution, you must first set up your development environment by installing the following software on your machine:

1. Visual Studio Code (or IDE of your choice)
2. Node Package Manager (npm)
3. TypeScript Compiler (tsc)

For best results, follow the complete instructions for setting up your environment and using the TypeScript compiler in [LINK TO Module 01: Get started with TypeScript ]. After setting up your environment, you can run any of the Lab setup or solution files in the "Developing JavaScript applications using TypeScript" [LINK TO the Developing JavaScript applications using TypeScript] learning path.

## Exercise 1

The following JavaScript code contains three functions:

- `BuildArray` builds an array of unique random numbers. It accepts an `items` parameter that determines the number of items in the array and a `sortOrder` parameter that determines whether the array is sorted in ascending or descending order.
- `sortDescending` and `sortAscending` are comparison functions that tell the `sort()` method how to sort numbers in ascending or descending order.

Convert the functions to TypeScript with strongly typed parameters and return types.

1. Copy and paste the following JavaScript code your TypeScript editor.

   ```javascript
   /*  EXERCISE 1
       TODO: Declare a new function type for the sortDescending and sortAscending functions 
       using either a type alias or an interface. Then, apply the new function type 
       as the variable type. */
    
   /*  TODO: Convert the sortDescending and sortAscending functions to anonymous 
       functions and assign them to variables of the same name. Add types to the 
       parameter lists and return values for each function. */

   /*  sortDescending is a comparison function that tells the sort method how to sort 
       numbers in descending order */
   function sortDescending(a, b) {
     if (a > b) {
       return -1;
     } else if (b > a) {
       return 1;
     } else {
       return 0;
     }
   }
   
   /*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in ascending order. */
   function sortAscending(a, b) {
     if (a > b) {
       return 1;
     } else if (b > a) {
       return -1;
     } else {
       return 0;
     }
   }
   
   /*  The buildArray function builds an array of unique random numbers containing the number 
    of items based on the number passed to it. The sortOrder parameter determines 
    whether to sort the array in ascending or descending order. */
   
   /*  TODO: In the BuildArray function, add types to parameter list, 
       return value, and variables. */
   
   function buildArray(items, sortOrder) {
       let randomNumbers = [];
       let nextNumber;
       for (let counter = 0; counter < items; counter++) {
           nextNumber = Math.ceil(Math.random() * (100 - 1));
           if (randomNumbers.indexOf(nextNumber) === -1) {
             randomNumbers.push(nextNumber);
           } else {
             counter--;
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
4. Declare a new function type for the `sortDescending` and `sortAscending` functions using either a type alias or an interface. Then, apply the new function type as the variable type.

## Exercise 2

This JavaScript function returns the payment amount for a loan.

1. Copy and paste the following JavaScript code your TypeScript editor.

   ```typescript
   /*  EXERCISE 2
    TODO: Convert the loanCalculator function to TypeScript with strongly typed parameters, variables, 
    and return types. Make the numMonths parameter optional but assign it a default value of 12 
    months if omitted. */
   
   function loanCalculator (principle, interestRate, numberOfMonths) {
       let interest = interestRate / 1200;   // Calculates the monthly interest rate
       let payment;
       payment = principle * interest / (1 - (Math.pow(1/(1 + interest), numberOfMonths)));
       return payment.toFixed(2);
   }
   ```

2. Convert the `loanCalculator` function to TypeScript with strongly typed parameters, variables, and return types.
3. Make the `numberOfMonths` parameter optional but assign it a default value of `12` months if omitted.

## Challenge yourself!

For an added challenge, take some existing JavaScript that you may have written or that you find on the web and re-write it in TypeScript using what you've learned about functions. You can copy and paste the JavaScript into the Playground and edit it or use another editor like Visual Studio Code.

## Lab solution

Download the solution workspace [LINK TO \code\module-04\m04-end] and open the file **module04.ts** to see the solution to this lab. See the **Lab setup** section above for more information about setting up your development environment to run the solution.
