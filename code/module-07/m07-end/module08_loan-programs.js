"use strict";
exports.__esModule = true;
exports.conventionalLoan = exports.interestOnlyLoan = void 0;
// Calculates the monthly payment of an interest only loan
function interestOnlyLoan(loanTerms) {
    var payment;
    payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
exports.interestOnlyLoan = interestOnlyLoan;
// Calculates the monthly payment of a conventional loan      
function conventionalLoan(loanTerms) {
    var interest = calculateInterestRate(loanTerms.interestRate);
    var payment;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.numberOfMonths)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
exports.conventionalLoan = conventionalLoan;
function calculateInterestRate(interestRate) {
    var interest = interestRate / 1200;
    return interest;
}
