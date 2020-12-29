"use strict";
/// <reference path="module07_loans.ts" />
var LoanPrograms;
(function (LoanPrograms) {
    // Calculates the monthly payment of an interest only loan
    function interestOnlyLoan(loanTerms) {
        let payment;
        payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.interestOnlyLoan = interestOnlyLoan;
    // Calculates the monthly payment of a conventional loan      
    function conventionalLoan(loanTerms) {
        let interest = calculateInterestRate(loanTerms.interestRate);
        let payment;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.numberOfMonths)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.conventionalLoan = conventionalLoan;
    function calculateInterestRate(interestRate) {
        let interest = interestRate / 1200;
        return interest;
    }
})(LoanPrograms || (LoanPrograms = {}));
