
namespace Loans {
    export interface Loan {
        principle: number,
        interestRate: number        //* Interest rate percentage (eg. 14 is 14%)
    }
    export interface ConventionalLoan extends Loan {
        numberOfMonths: number      //* Total number of months
    }
}