In this lab, you'll write the JavaScript in each of the exercises below in TypeScript, strongly typing each of the variables.

## Lab setup

You can use the TypeScript [Playground](https://www.typescriptlang.org/play) or Visual Studio Code to complete this lab.

### Playground

If you’re using the Playground, copy and paste the starting code into it as directed in the lab instructions.

### Visual Studio Code

If you’re using an existing Visual Studio Code workspace, add a new file named **module02.ts** to your project and copy and paste the starting code into it as directed in the lab instructions. 

You can also download the starting workspace at [LINK TO \code\module-02\m02-start] and edit the file **module02.ts**. To run the solution, you must first set up your development environment by installing the following software on your machine:

1. Visual Studio Code (or IDE of your choice)
2. Node Package Manager (npm)
3. TypeScript Compiler (tsc)

For best results, follow the complete instructions for setting up your environment and using the TypeScript compiler in [LINK TO Module 01: Get started with TypeScript ]. After setting up your environment, you can run any of the Lab setup or solution files in the "Developing JavaScript applications using TypeScript" [LINK TO the Developing JavaScript applications using TypeScript] learning path.

## Exercise 1

1. Copy and paste the following JavaScript code your TypeScript editor. 
2. Modify the code to add types to the variable declarations. The resulting JavaScript should look the same as the original example when you're done.

    ```javascript
    let firstName;
    let lastName;
    let fullName;
    let age;
    let ukCitizen;
    
    firstName = 'Rebecca';
    lastName = 'Smith';
    age = 42;
    ukCitizen = false;
    fullName = firstname + " " + lastname;
    
    if (ukCitizen) {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
    } else {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
    }
    ```

## Exercise 2

1. Copy and paste the following JavaScript code your TypeScript editor. 
2. You can use types to ensure operation outcomes. Run the code as is and then modify it to have strongly typed variables. 
3. Address any errors you find so that the result returned to a is `12`.

    ```javascript
    let x;
    let y;
    let a;
    
    x = 'five';
    y = 7;
    a = x + y;
    
    console.log(a);
    ```

## Exercise 3

1. Copy and paste the following JavaScript code your TypeScript editor. 
2. Implement an `enum` type called `Season` that represents the constants `"Fall"`, `"Winter`", `"Spring`", and `"Summer`". 
3. Update the function so you can pass in the season by referencing an item in the `enum`, for example `Season.Fall`, instead of the literal string `"Fall"`.

    ```javascript
    function whichMonths(season) {
        let monthsInSeason: string;
        switch (season) {
            case "Fall":
                monthsInSeason = "September to November";
                break;
            case "Winter":
                monthsInSeason = "December to February";
                break;
            case "Spring":
                monthsInSeason = "March to May";
                break;
            case "Summer":
                monthsInSeason = "June to August";
        }
        return monthsInSeason;
    }
    
    console.log(whichMonths("Fall"));
    ```

## Exercise 4

1. Copy and paste the following JavaScript code your TypeScript editor. 
2. Declare the array as the type to match the type of the items in the array.

    ```javascript
    let randomNumbers;
    let nextNumber;
    for (let i = 0; i < 10; i++) {
        nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
        randomNumbers.push(nextNumber);
    }
    
    console.log(randomNumbers);
    ```

## Challenge yourself!

For an added challenge, take some existing JavaScript that you may have written or that you find on the web and re-write it adding basic types using TypeScript. You can copy and paste the JavaScript into the Playground and edit it or use another editor like Visual Studio Code.

## Lab solution

Download the solution workspace [LINK TO \code\module-02\m02-end] and open the file **module02.ts** to see the solution to this lab. See the **Lab setup** section above for more information about setting up your development environment to run the solution.
