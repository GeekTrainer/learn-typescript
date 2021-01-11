/* Module 3: Implement interfaces in TypeScript
   Lab End  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */

interface Loan {
    principle: number,
    interestRate: number    //* Interest rate percentage (eg. 14 is 14%)
}

/*  TODO: Declare the ConventionalLoan interface. */

interface ConventionalLoan extends Loan {
    numberOfMonths: number      //* Total number of months
}

/*  TODO: Update the interestOnlyLoan function. */

function interestOnlyLoan(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest: number = loanTerms.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = loanTerms.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the conventionalLoan function. */

function conventionalLoan(loanTerms: ConventionalLoan): string {
    // Calculates the monthly payment of a conventional loan
    let interest: number = loanTerms.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.numberOfMonths)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let loan1 = interestOnlyLoan({principle: 30000, interestRate: 5});
let loan2 = conventionalLoan({principle: 30000, interestRate: 5, numberOfMonths: 180});

console.log(loan1);     //* Returns "The interest only loan payment is 125.00" 
console.log(loan2);     //* Returns "The conventional loan payment is 237.24" 
