In this lab, you'll write the JavaScript in each of the exercises below in TypeScript, strongly typing each of the variables.

You can use the TypeScript [Playground](https://www.typescriptlang.org/play) or Visual Studio Code for your work.

## Exercise 1

Modify the code to add types to the variable declarations. The resulting JavaScript should look the same as the original example when you're done.

```javascript
let firstName;
let lastName;
let fullName;
let age;
let ukCitizen;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstname + " " + lastname;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}

```

## Exercise 2

You can use types to ensure operation outcomes. Run the code as is and then modify it to have strongly typed variables. Then, address any errors you find so that the result returned to a is `12`.

```javascript
let x;
let y;
let a;

x = 'five';
y = 7;
a = x + y;

console.log(a);

```

## Exercise 3

In the following code, implement an `enum` type called `Season` that represents the constants `"Fall"`, `"Winter`", `"Spring`", and `"Summer`". Then, update the function so you can pass in the season by referencing an item in the `enum`, for example `Season.Fall`, instead of the literal string `"Fall"`.

```javascript
function whichMonths(season) {

    let monthsInSeason: string;

    switch (season) {
        case "Fall":
            monthsInSeason = "September to November";
            break;
        case "Winter":
            monthsInSeason = "December to February";
            break;
        case "Spring":
            monthsInSeason = "March to May";
            break;
        case "Summer":
            monthsInSeason = "June to August";
    }

    return monthsInSeason;
}

console.log(whichMonths("Fall"));

```

## Exercise 4

Declare the array as the type to match the type of the items in the array.

```javascript
let randomNumbers;
let nextNumber;

for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}

console.log(randomNumbers);

```

## Challenge yourself!

For an added challenge, take some existing JavaScript that you may have written or that you find on the web and re-write it adding basic types using TypeScript. You can copy and paste the JavaScript into the Playground and edit it or use another editor like Visual Studio Code.

## Lab answers

You can find the answers to the exercises in this Visual Studio Code workspace. **REVIEWER NOTE: I WILL ADD A LINK TO THE VSCODE WORKSPACE LATER.*
