In this lab, you'll organize some TypeScript code using modules. As an additional challenge, you'll import an external type library.

## Lab setup

To complete the lab, you must first set up your development environment by installing the following software on your machine:

1. Visual Studio Code (or IDE of your choice)
2. Node Package Manager (npm)
3. TypeScript Compiler (tsc)

For best results, follow the complete instructions for setting up your environment and using the TypeScript compiler in [LINK TO Module 01: Get started with TypeScript ]. After setting up your environment, you can run any of the Lab setup or solution files in the "Developing JavaScript applications using TypeScript" [LINK TO the Developing JavaScript applications using TypeScript] learning path.

## Exercise 1

In this exercise, you'll organize the code in a project using modules. The project contains three TypeScript files:

- **module07_main.ts** - Contains the main code of the application.
- **module07_loans.ts** - Contains two interfaces, `Loan` and `ConventionalLoan`.
- **module07_loan-programs.ts** - Contains three functions:
   - `calculateInterestOnlyLoanPayment`, which calculates the payment for an interest only loan.
   - `calculateConventionalLoanPayment`, which calculates the payment for a  conventional loan.
   - `calculateInterestRate`, a worker function that calculates the monthly interest rate of the loan.

The `calculateInterestOnlyLoanPayment` and `calculateConventionalLoanPayment` functions accept `principle` and `interestRate` parameters. The difference between them is that the `calculateConventionalLoanPayment` function accepts a third property, `months` that the `calculateInterestOnlyLoanPayment` function does not.

| Property| Description|
| :--- | :--- |
| `principle`| The principle amount of the loan.|
| `interestRate`| The annual interest rate of the loan. For example, 5% is specified as 5.|
| `months`| The term of the loan specified in months. An interest only loan does not require this property because the number of months is irrelevant (the loan will never be repaid when an interest only payment is made each month.)|

1. Clone the starting repository by entering the following at the command prompt. [REPLACE THE URL PLACEHOLDER WITH A LINK TO \code\module-07\m07-start] 

   ```bash
   git clone <url>
   cd <folder name>
   code .
   ```

1. Open the file **module07.ts**. 
1. Locate `TODO: UPDATE TEXT`.

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
9. Test your work in node by running the **module07_main.js** file.

## Lab solution

Clone the ending repository by entering the following at the command prompt. [REPLACE THE URL PLACEHOLDER WITH A LINK TO \code\module-07\m07-end] 

```bash
git clone <url>
cd <folder name>
code .
```

Open the file **module05.ts** to see the solution to this lab. See the **Lab setup** section above for more information about setting up your development environment to run the solution.
