In this lab, you'll convert some JavaScript code to strongly typed code using interfaces.

The JavaScript code contains two functions: `intOnlyLoan`, which calculates the payment for an interest only loan, and `convLoan`, which calculates the payment for a conventional loan. As with most loan calculations, both functions accept `principle` and `interestRate` parameters. The difference between them is that the `convLoan` function accepts a third property, `numMonths` that the `intOnlyLoan` function does not.

| Property| Description|
| :--- | :--- |
| `principle`| The principle amount of the loan.|
| `interestRate`| The annual interest rate of the loan. For example, 5% is specified as 5.|
| `numMonths`| The term of the loan specified in months. An interest only loan does not require this property because the number of months is irrelevant (the loan will never be repaid when an interest only payment is made each month.)|

In this exercise, you will:

1. Declare an interface called `Loan` that defines two properties, `principle` and `interestRate`.
2. Declare an interface called `ConvLoan` that extends `Loan`, and defines the additional property required for a conventional loan, `numMonths`.
3. Update the two functions to implement the new interfaces and strongly type the parameters.

## Lab setup

You can use the TypeScript [Playground](https://www.typescriptlang.org/play) or Visual Studio Code to complete this lab.

### Playground

If you’re using the Playground, copy and paste the starting code into it as directed in the lab instructions.

### Visual Studio Code

If you’re using an existing Visual Studio Code workspace, add a new file named **module03.ts** to your project and copy and paste the starting code into it as directed in the lab instructions. 

You can also download the starting workspace at [LINK TO \code\module-03\m03-start] and edit the file **module03.ts**. To run the solution, you must first set up your development environment by installing the following software on your machine:

1. Visual Studio Code (or IDE of your choice)
2. Node Package Manager (npm)
3. TypeScript Compiler (tsc)

For best results, follow the complete instructions for setting up your environment and using the TypeScript compiler in [LINK TO Module 01: Get started with TypeScript ]. After setting up your environment, you can run any of the Lab setup or solution files in the "Developing JavaScript applications using TypeScript" [LINK TO the Developing JavaScript applications using TypeScript] learning path.

## Exercise 1 - Declare the interfaces

1. Copy and paste the following JavaScript code your TypeScript editor.

   ```javascript
   /*  EXERCISE 1
       TODO: Declare an interface called Loan that defines two properties, principle 
       and interestRate, as a number. */


   /*  TODO: Declare an interface called ConvLoan that extends Loan, and defines the 
       additional property required for a conventional loan, numMonths, as a number. */



   /*  TODO: Replace the two parameters in the intOnlyLoan function with an object of 
       type Loan (for example, loanTerms: Loan) and type the return value of the function 
       as a string. 
       
       Replace the parameter names in the function with properties of the Loan object.
       (For example, loanTerms.interestRate).
    
       Type the intr and pmt variables as numbers.*/   
    
   function intOnlyLoan(principle, interestRate) {
       // Calculates the monthly payment of an interest only loan
       let intr = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
       let pmt;
       pmt = principle * intr;
       return 'The interest only loan payment is ' + pmt.toFixed(2);
   }
   
   function convLoan(principle, interestRate, numMonths) {
       // Calculates the monthly payment of a conventional loan
       let intr = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
       let pmt;
       pmt = principle * intr / (1 - (Math.pow(1 / (1 + intr), numMonths)));
       return 'The conventional loan payment is ' + pmt.toFixed(2);
   }
   
   let loan1 = intOnlyLoan(30000, 5);
   let loan2 = convLoan({30000, 5, 180);
   
   console.log(loan1);     //* Returns "The interest only loan payment is 125.00" 
   console.log(loan2);     //* Returns "The conventional loan payment is 237.24" 
   ```

2. Declare an interface called `Loan` that defines two properties, `principle` and `interestRate`, as a `number`.
3. Declare an interface called `ConvLoan` that extends `Loan`, and defines the additional property required for a conventional loan, `numMonths`, as a `number`.

## Exercise 2 - Implement the interfaces

1. Replace the two parameters in the `intOnlyLoan` function with an object of type `Loan` (for example, `loanTerms: Loan`) and type the return value of the function as a `string`.
2. You'll notice a couple of errors because TypeScript does not recognize the type of the parameters `interestRate` and `principle`. Replace the parameter names in the function with properties of the `Loan` object. (For example, `loanTerms.interestRate`).
3. Type the `intr` and `pmt` variables as `numbers`.
4. Test the `intOnlyLoan` function to verify that it is working correctly. Remember that you must now pass the parameters to the function in the form of a `Loan` object.
5. Update the `convLoan` function, this time replacing the three parameters with an object of type `ConvLoan` and type the return value of the function as a `string`.
6. Make any remaining updates to the implementation of the `convLoan` function and test your work.

## Lab solution

Download the solution workspace [LINK TO \code\module-03\m03-end] and open the file **module03.ts** to see the solution to this lab. See the **Lab setup** section above for more information about setting up your development environment to run the solution.
