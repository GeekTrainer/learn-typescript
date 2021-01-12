/*  Module 8: Organize code in TypeScript
    Lab Start */

/*  TODO: Create a new namespace called Loans. */


interface Loan {
    principle: number,
    interestRate: number        //* Interest rate percentage (eg. 14 is 14%)
}
interface ConventionalLoan extends Loan {
    months: number      //* Total number of months
}

/*  TODO: Create a new namespace called LoanPrograms. */


// Calculates the monthly payment of an interest only loan
function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    let payment: number;
    payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
// Calculates the monthly payment of a conventional loan      
function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    let interest: number = calculateInterestRate(loanTerms.interestRate);
    let payment: number;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
function calculateInterestRate (interestRate: number): number {
    let interest: number = interestRate / 1200;
    return interest
}
/*  TODO: Update the function calls. */
let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalLoanPayment = calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     //* Returns "The conventional loan payment is 237.24"
