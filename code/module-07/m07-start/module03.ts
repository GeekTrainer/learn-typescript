/* Module 3: Implement interfaces in TypeScript
   Lab End  */

/*  EXERCISE 1
    TODO: Declare an interface called Loan that defines two properties, principle 
    and interestRate, as a number. */

interface Loan {
    principle: number,
    interestRate: number    //* Interest rate percentage (eg. 14 is 14%)
}

/*  TODO: Declare an interface called ConvLoan that extends Loan, and defines the 
    additional property required for a conventional loan, numMonths, as a number. */

interface ConvLoan extends Loan {
    numMonths: number      //* Total number of months
}

/*  TODO: Replace the two parameters in the intOnlyLoan function with an object of 
    type Loan (for example, loanTerms: Loan) and type the return value of the function 
    as a string. 
    
    Replace the parameter names in the function with properties of the Loan object. 
    (For example, loanTerms.interestRate).
    
    Type the intr and pmt variables as numbers.*/

function intOnlyLoan(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let intr: number = loanTerms.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
    let pmt: number;
    pmt = loanTerms.principle * intr;
    return 'The interest only loan payment is ' + pmt.toFixed(2);
}

/*  TODO: Update the convLoan function, this time replacing the three parameters with an 
    object of type ConvLoan and type the return value of the function as a string. */

function convLoan(loanTerms: ConvLoan): string {
    // Calculates the monthly payment of a conventional loan
    let intr: number = loanTerms.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
    let pmt: number;
    pmt = loanTerms.principle * intr / (1 - (Math.pow(1/(1 + intr), loanTerms.numMonths)));
    return 'The conventional loan payment is ' + pmt.toFixed(2);
}

let loan1 = intOnlyLoan({principle: 30000, interestRate: 5});
let loan2 = convLoan({principle: 30000, interestRate: 5, numMonths: 180});

console.log(loan1);     //* Returns "The interest only loan payment is 125.00" 
console.log(loan2);     //* Returns "The conventional loan payment is 237.24" 