In this lab, you'll convert some JavaScript code to strongly typed code using interfaces.

The JavaScript code contains two functions: `intOnlyLoan`, which calculates the payment for an interest only loan, and `convLoan`, which calculates the payment for a conventional loan. As with most loan calculations, both functions accept `principle` and `interestRate` parameters. The difference between them is that the `convLoan` function accepts a third property, `numMonths` that the `intOnlyLoan` function does not.

| Property| Description|
| :--- | :--- |
| `principle`| The principle amount of the loan.|
| `interestRate`| The annual interest rate of the loan. For example, 5% is specified as 5.|
| `numMonths`| The term of the loan specified in months. An interest only loan does not require this property because the number of months is irrelevant (the loan will never be repaid when an interest only payment is made each month.)|

In this exercise, you will:

1. Declare an interface called `Loan` that defines two properties, `principle` and `interestRate`.

1. Declare an interface called `ConvLoan` that extends `Loan`, and defines the additional property required for a conventional loan, `numMonths`.

1. Update the two functions to implement the new interfaces and strongly type the parameters.

You can either use the [Playground](https://www.typescriptlang.org/play) or your VS Code workspace to complete the exercise.

## Exercise 1 - Declare the interfaces

1. Copy and paste the JavaScript code into a new TypeScript file.

```javascript
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

1. Declare an interface called `ConvLoan` that extends `Loan`, and defines the additional property required for a conventional loan, `numMonths`, as a `number`.

## Exercise 2 - Implement the interfaces

1. Replace the two parameters in the `intOnlyLoan` function with an object of type `Loan` (for example, `loanTerms: Loan`) and type the return value of the function as a `string`.

1. You'll notice a couple of errors because TypeScript does not recognize the type of the parameters `interestRate` and `principle`. Replace the parameter names in the function with properties of the `Loan` object. (For example, `loanTerms.interestRate`).

1. Type the `intr` and `pmt` variables as `numbers`.

1. Test the `intOnlyLoan` function to verify that it is working correctly. Remember that you must now pass the parameters to the function in the form of a `Loan` object.

1. Update the `convLoan` function, this time replacing the three parameters with an object of type `ConvLoan` and type the return value of the function as a `string`.

1. Make any remaining updates to the implementation of the `convLoan` function and test your work.

1. See [FILENAME (SOLUTION IS BELOW)] for the solution to the exercise.

```typescript
interface Loan {
    principle: number,
    interestRate: number    //* Interest rate percentage (eg. 14 is 14%)
}

interface ConvLoan extends Loan {
    numMonths: number      //* Total number of months
}

function intOnlyLoan(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let intr: number = loanTerms.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
    let pmt: number;
    pmt = loanTerms.principle * intr;
    return 'The interest only loan payment is ' + pmt.toFixed(2);
}

function convLoan(loanTerms: ConvLoan): string {
    // Calculates the monthly payment of a conventional loan
    let intr: number = loanTerms.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
    let pmt: number;
    pmt = loanTerms.principle * intr / (1 - (Math.pow(1/(1 + intr), loanTerms.numMonths)));
    return 'The conventional loan payment is ' + pmt.toFixed(2);
}

let loan1 = intOnlyLoan({principle: 30000, interestRate: 5});
let loan2 = convLoan({principle: 30000, interestRate: 5, numMonths: 180});

console.log(loan1);
console.log(loan2);
```

