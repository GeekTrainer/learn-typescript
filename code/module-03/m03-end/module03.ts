/* Module 3: Implement interfaces in TypeScript
   Lab End  */

/*  EXERCISE 1
    TODO: Declare an interface called Loan that defines two properties, principle 
    and interestRate, as a number. */

interface Loan {
    principle: number,
    interestRate: number    //* Interest rate percentage (eg. 14 is 14%)
}

/*  TODO: Declare an interface called ConventionalLoan that extends Loan, and defines the 
    additional property required for a conventional loan, numberOfMonths, as a number. */

interface ConventionalLoan extends Loan {
    numberOfMonths: number      //* Total number of months
}

/*  TODO: Replace the two parameters in the interestOnlyLoan function with an object of 
    type Loan (for example, loanTerms: Loan) and type the return value of the function 
    as a string. 
    
    Replace the parameter names in the function with properties of the Loan object. 
    (For example, loanTerms.interestRate).
    
    Type the interest and payment variables as numbers.*/

function interestOnlyLoan(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest: number = loanTerms.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = loanTerms.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the conventionalLoan function, this time replacing the three parameters with an 
    object of type ConventionalLoan and type the return value of the function as a string. */

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
