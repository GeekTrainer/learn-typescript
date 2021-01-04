In this lab, you'll try out different ways to organize your code using TypeScript.

## Lab setup

You must use Visual Studio Code to complete this lab because the solution requires multiple TypeScript files. It is not possible to complete the lab using the TypeScript [Playground](https://www.typescriptlang.org/play).

### Visual Studio Code

If you’re using an existing Visual Studio Code workspace, add a new file named **module07_main.ts** to your project and copy and paste the starting code into it as directed in the lab instructions.

You can also download the starting workspace at [LINK TO \code\module-07\m07-start] and edit the file **module07_main.ts**. To run the solution, you must first set up your development environment by installing the following software on your machine:

- Visual Studio Code (or IDE of your choice)
- Node Package Manager (npm)
- TypeScript Compiler (tsc)

For best results, follow the complete instructions for setting up your environment and using the TypeScript compiler in [LINK TO Module 01: Get started with TypeScript ]. After setting up your environment, you can run any of the Lab setup or solution files in the "Developing JavaScript applications using TypeScript" [LINK TO the Developing JavaScript applications using TypeScript] learning path.

## Exercise 1

The TypeScript code below contains two interfaces: `Loan` and `ConventionalLoan`. It also contains three functions:

- `interestOnlyLoan`, which calculates the payment for an interest only loan.
- `conventionalLoan`, which calculates the payment for a  conventional loan.
- `calculateInterestRate`, a worker function that calculates the monthly interest rate of the loan.

The `interestOnlyLoan` and `conventionalLoan` functions accept `principle` and `interestRate` parameters. The difference between them is that the `convLoan` function accepts a third property, `numMonths` that the `intOnlyLoan` function does not.

| Property| Description|
| :--- | :--- |
| `principle`| The principle amount of the loan.|
| `interestRate`| The annual interest rate of the loan. For example, 5% is specified as 5.|
| `numMonths`| The term of the loan specified in months. An interest only loan does not require this property because the number of months is irrelevant (the loan will never be repaid when an interest only payment is made each month.)|

In this exercise, you'll organize the code using namespaces in a single TypeScript file.

1. Copy and paste the following JavaScript code your TypeScript editor.

   ```typescript
   /* TODO: Encapsulate the Loan and ConventionalLoan interfaces into a namespace called Loans.
      Update the Loan and ConventionalLoan interfaces so they are visible outside of the Loans
      namespace. *
   interface Loan {
       principle: number,
       interestRate: number        //* Interest rate percentage (eg. 14 is 14%)
   }
   interface ConventionalLoan extends Loan {
       numberOfMonths: number      //* Total number of months
   }
   /* TODO: Encapsulate the three functions into a namespace called LoanPrograms.
      In the interestOnlyLoan and conventionalLoan functions:
      - Update the references to the Loan and ConventionalLoan interfaces so the functions can implement them.
      - Make them visible outside of the LoanPrograms namespace. */

   // Calculates the monthly payment of an interest only loan
   function interestOnlyLoan(loanTerms: Loan): string {
       let payment: number;
       payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
       return 'The interest only loan payment is ' + payment.toFixed(2);
   }
   // Calculates the monthly payment of a conventional loan
   function conventionalLoan(loanTerms: ConventionalLoan): string {
       let interest: number = calculateInterestRate(loanTerms.interestRate);
       let payment: number;
       payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.numberOfMonths)));
       return 'The conventional loan payment is ' + payment.toFixed(2);
   }
   function calculateInterestRate (interestRate: number): number {
       let interest: number = interestRate / 1200;
       return interest
   }

   /* TODO: Update function calls in the loanA and loanB variable declarations. */
   let loanA = interestOnlyLoan({principle: 30000, interestRate: 5});
   let loanB = conventionalLoan({principle: 30000, interestRate: 5, numberOfMonths: 180});
   console.log(loanA);     //* Returns "The interest only loan payment is 125.00"
   console.log(loanB);     //* Returns "The conventional loan payment is 237.24"
   ```

2. Encapsulate the `Loan` and `ConventionalLoan` interfaces into a namespace called `Loans`.
3. Update the `Loan` and `ConventionalLoan` interfaces so they are visible outside of the `Loans` namespace.
4. Encapsulate the three functions into a namespace called `LoanPrograms`.
5. In the `interestOnlyLoan` and `conventionalLoan` functions:
   1. Update the references to the `Loan` and `ConventionalLoan` interfaces so the functions can implement them.
   2. Make the functions visible outside of the `LoanPrograms` namespace.
6. Update function calls in the `loanA` and `loanB` variable declarations.
7. Compile and test your work.

## Exercise 2

In this exercise, you'll reorganize the namespaces into multiple TypeScript files.

1. Continue your project from Exercise 1.
2. Create two new TypeScript files in your workspace, **module07_loans.ts** and **module07_loan-programs.ts**.
3. Move the `Loans` namespace from **module07_main.ts** to **module07_loans.ts**.
4. Move the `LoanPrograms` namespace from **module07_main.ts** to **module07_loan-programs.ts**.
5. Add the required `reference` statements to describe the relationship between the **module07_loan-programs.ts** and **module07_main.ts** files.
6. At the command prompt, run the `tsc` command to compile all the **.ts** files, and then run the `tsc --outFile main.js module07_main.ts` command to create a single JavaScript file named **main.js**.
7. Test your work by running the **main.js** file.

## Exercise 3

In this exercise, you'll convert the multi-file namespace solution in the previous exercise to a module-based solution.

1. Continue your project from Exercise 2.
2. Create a new folder called **Namespace** in your project folder.
3. Copy **module07_main.ts**, **module07_loans.ts,** and **module07_loan-programs.ts** from the root folder and paste them into the **Namespaces** folder. This retains a copy of your work from Exercise 2.
4. Return to the root folder.
5. In **module07_loans.ts**, remove the `namespace` declaration and retain the `export` keyword on the interface declarations.
6. In **module07_loan-programs.ts**:
   1. Remove the `namespace` declaration.
   2. Remove the `reference` statement and replace it with an `import` statement that imports the `Loan` and `ConventionalLoan` interfaces from **module07_loans.ts**. For convenience, you can import both interfaces using one import statement and assign them to a variable called `Loans`.
   3. Retain the `export` keyword on the two function declarations.
7. In **module07_main.ts**, replace the two `reference` statements with one `import` statement that imports the `interestOnlyLoan` and `conventionalLoan` functions from **module07_loan-programs.ts**. For convenience, assign the functions to a variable called `LoanPrograms`.
8. At the command prompt, run the `tsc` command using the `--module commonjs` option to compile **module07_main.ts**.
9. Test your work by running the **module07_main.js** file.

## Lab solution

Download the solution workspace [LINK TO \code\module-07\m07-end] and open the **.ts** files to see the solution to this lab. See the **Lab setup** section above for more information about setting up your development environment to run the solution.
