/*  Module 7: Organize code in TypeScript
    Lab Start */

/*  TODO: Encapsulate the Loan and ConventionalLoan interfaces into a namespace called Loans.
    Update the Loan and ConventionalLoan interfaces so they are visible outside of the Loans
    namespace. */
interface Loan {
    principle: number,
    interestRate: number        //* Interest rate percentage (eg. 14 is 14%)
}
interface ConventionalLoan extends Loan {
    numberOfMonths: number      //* Total number of months
}
/*  TODO: Encapsulate the three functions into a namespace called LoanPrograms. 
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
/*  TODO: Update function calls in the loanA and loanB variable declarations. */
let loanA = interestOnlyLoan({principle: 30000, interestRate: 5});
let loanB = conventionalLoan({principle: 30000, interestRate: 5, numberOfMonths: 180});
console.log(loanA);     //* Returns "The interest only loan payment is 125.00" 
console.log(loanB);     //* Returns "The conventional loan payment is 237.24"
