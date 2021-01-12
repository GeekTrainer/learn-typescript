/*  Module 7: Namespaces in TypeScript
    Lab End */

//  Interfaces moved to module07_loans.ts

//  Functions moved to module07_loan-programs.ts

/*  TODO Add reference paths. */
/// <reference path="module07_loans.ts" />
/// <reference path="module07_loan-programs.ts" />

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalLoanPayment = calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);         //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     //* Returns "The conventional loan payment is 237.24"
