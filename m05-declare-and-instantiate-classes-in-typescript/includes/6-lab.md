In this lab, you'll apply what you've learned about classes to convert a TypeScript function to a class.

## Lab setup

You can use the TypeScript [Playground](https://www.typescriptlang.org/play) or Visual Studio Code to complete this lab.

### Playground

If you’re using the Playground, copy and paste the starting code into it as directed in the lab instructions.

### Visual Studio Code

If you’re using an existing Visual Studio Code workspace, add a new file named **module05.ts** to your project and copy and paste the starting code into it as directed in the lab instructions. 

You can also download the starting workspace at [LINK TO \code\module-05\m05-start] and edit the file **module05.ts**. To run the solution, you must first set up your development environment by installing the following software on your machine:

1. Visual Studio Code (or IDE of your choice)
2. Node Package Manager (npm)
3. TypeScript Compiler (tsc)

For best results, follow the complete instructions for setting up your environment and using the TypeScript compiler in [LINK TO Module 01: Get started with TypeScript ]. After setting up your environment, you can run any of the Lab setup or solution files in the "Developing JavaScript applications using TypeScript" [LINK TO the Developing JavaScript applications using TypeScript] learning path.

## Exercise 1

The following TypeScript code contains three functions:

- `BuildArray2` builds an array of unique random numbers. It accepts an `items` parameter that determines the number of items in the array and a `sortOrder` parameter that determines whether the array is sorted in ascending or descending order.
- `sortDecending2` and `sortAscending2` are comparison functions that tell the `sort()` method how to sort numbers in ascending or descending order.

Convert the functions to a TypeScript class.

1. Copy and paste the following JavaScript code your TypeScript editor.

    ```typescript
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
    ```

2. Create a new class called `BuildArray`.
3. Define the properties in the class: `_items` and `_sortOrder`.
4. Define the class `constructor` for the properties.
5. Define the accessors for the `items` and `sortOrder` parameters.
6. Convert the `sortAscending2` and `sortDescending2` functions to `private` methods in the class.
7. Convert the `buildArray2` function to a `public` method in the class.
8. Update the `testArray1` and `testArray2` variable declarations to instantiate new `BuildArray` objects.
9. Call the `buildArray2` method on the objects and return the result to the console.

## Challenge yourself!

For an added challenge, take some existing JavaScript that you may have written or that you find on the web and re-write it in TypeScript using what you've learned about classes. You can copy and paste the JavaScript into the Playground and edit it or use another editor like Visual Studio Code.

## Lab solution

Download the solution workspace [LINK TO \code\module-05\m05-end] and open the file **module05.ts** to see the solution to this lab. See the **Lab setup** section above for more information about setting up your development environment to run the solution.
