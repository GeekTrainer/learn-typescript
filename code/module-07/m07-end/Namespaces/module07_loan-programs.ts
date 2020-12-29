/// <reference path="module07_loans.ts" />

namespace LoanPrograms {
    // Calculates the monthly payment of an interest only loan
    export function interestOnlyLoan(loanTerms: Loans.Loan): string {
        let payment: number;
        payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    // Calculates the monthly payment of a conventional loan      
    export function conventionalLoan(loanTerms: Loans.ConventionalLoan): string {
        let interest: number = calculateInterestRate(loanTerms.interestRate);
        let payment: number;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.numberOfMonths)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    function calculateInterestRate (interestRate: number): number {
        let interest: number = interestRate / 1200;
        return interest
    }
}