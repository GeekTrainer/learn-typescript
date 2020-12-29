"use strict";
/*  Module 7: Namespaces in TypeScript
    Lab End */
exports.__esModule = true;
//  Interfaces moved to module07_loans.ts
//  Functions moved to module07_loan-programs.ts
var LoanPrograms = require("./module07_loan-programs"); // imports all the functions from the modules
var loanA = LoanPrograms.interestOnlyLoan({ principle: 30000, interestRate: 5 });
var loanB = LoanPrograms.conventionalLoan({ principle: 30000, interestRate: 5, numberOfMonths: 180 });
console.log(loanA); //* Returns "The interest only loan payment is 125.00" 
console.log(loanB); //* Returns "The conventional loan payment is 237.24" 
