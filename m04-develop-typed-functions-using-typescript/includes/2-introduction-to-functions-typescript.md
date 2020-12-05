In JavaScript, function definitions do not specify data types for parameters, perform type checking on the passed arguments, or check the number of arguments received, so you must add the logic for checking these parameters to your functions.

TypeScript simplifies the development of functions and makes them easier to troubleshoot by enabling you to type parameters and return values. TypeScript also adds new options for parameters. For example, while all parameters are optional in JavaScript functions, you can choose to make parameters required or optional in TypeScript.

Adding types to functions help prevent you from passing values that you shouldn't pass to your functions. This is especially important when you're working with larger code bases or functions developed by others. And Intellisense provides type hints for function parameters when you invoke them. This built-in documentation is a great benefit given that JavaScript can rarely if ever determine the data type of a parameter.

As in JavaScript, you can define functions in TypeScript several different ways. Let's look at how these functions differ with the addition of types in TypeScript.

## Exercise - Named functions

A named function is a function declaration written with the `function` keyword and provided with a distinct name within the current scope. Named function declarations load into the execution context before any code runs. This is known as hoisting, meaning you can use the function before you declare it.

The syntax for declaring a named function in TypeScript is the same as defining one in JavaScript. The only difference with TypeScript that you can now provide a type annotation for the function's parameters and return value.

Open the [Playground](https://www.typescriptlang.org/play) to try it out.

1. Start by copying the following JavaScript function into the Playground. Notice that the parameter `msg` implicitly has an `any` type.

```javascript
function displayAlert(msg) {
	alert('The message is ' + msg);
}

```

2. Now, assign the `string` type to the `msg` parameter. This named function does not return a value so you can leave off the return type (you can also pass back `void` as the return type, but it is not necessary to do so.)

```typescript
function displayAlert(msg: string) {
	alert('The message is ' + msg);
}

```

3. Try calling the function, passing in a `string` as a parameter. Now, try passing in a `number`. TypeScript type checks the parameter and notifies you of the conflict. Depending on what you're trying to accomplish with this function, you can either put the number in quotes, expand the types of values accepted by the parameter with a union type (for example `msg: string | number`), or add some logic to your function to handle the different types of values passed into it.

4. Here's another example. The `sum` function totals the numbers in an array and returns the result. Copy the JavaScript code into the Playground.

```javascript
function sum(input) {
    let total =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])){
            continue;
        }
            total += Number(input[i]);
        }
        return total;
    }

```

5. Try calling the function with a single number as a parameter, for example, `sum(5)`. It accepts the value but doesn't return the correct result because the parameter is not passed as an array.

6. Now, set the type of the `input` parameter to an array of `number` values, set the return type of the function to a `number`, and then type the `total` variable.

```typescript
function sum(input: number[]): number {        
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])){
            continue;
        }
            total += Number(input[i]);
	}
        return total;
    }

```

7. TypeScript now flags the type issue with the parameter. Try calling the function with an array of values, for example, `sum([1, 'two', 3]`). It should now return the correct response. Notice also that the values inside the array are type checked.

While adding types is a simple difference, it offers the benefit of type checking the values that you pass to the function and what is returned. Instead of having to add all the logic to the function to verify the correct value type has been passed to it and the return value is correct, TypeScript helps ensure the correct value types as you develop your code. This is especially helpful when you're using functions developed by others because TypeScript clarifies the required input and output types.

## Anonymous functions

A *function expression* is a function that is not pre-loaded into the execution context, and only runs when the code encounters it. Function expressions are created at runtime and must be declared before they can be called. (This means that they are not hoisted, unlike named function declarations that are hoisted as soon as program execution begins and can be called before its declaration.)

Function expressions represent values so they are usually assigned to a variable or passed to other functions, and can be anonymous, meaning the function has no name.

This example assigns a `function` expression to the variable `addNums`. Notice that function appears in place of the function name, making the function anonymous. You can now use this variable to call the function.

```typescript
let addNums = function (x: number, y: number): number {
   return x + y;
}
addNums(1, 2);

```

This shows what the named function `sum` from the previous example looks like when written as an anonymous function. Notice that the name `add` has been replaced with function and the function has been implemented as an expression in a variable declaration.

```typescript
let total = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
            total += Number(input[i]);
        }
        return total;
}

console.log(total([1, 2, 3]));

```

As before, you'll get type checking and Intellisense when you use anonymous functions. You'll also notice in this example that the variable `total` is not typed, but TypeScript is able to determine its type through something called "contextual typing", a form of type inference. This can reduce the amount of effort required to keep your program typed.

## Arrow functions

Arrow functions (also called Lambda or fat arrow functions because of the `=>` operator used to define them) provide shorthand syntax for defining an anonymous function. Due to their concise nature, arrow functions are often used with simple functions and in some event handling scenarios.

This example compares the syntax of an anonymous `function` to a single line arrow function. The arrow function abbreviates the syntax by omitting the function keyword and adding the `=>` operator between the parameters and the function body.

```typescript
// Anonymous function
let addNums1 = function (x: number, y: number): number {
   return x + y;
}

// Arrow function
let addNums2 = (x: number, y: number): number => x + y;

```

In this example, notice also that the curly braces have been removed and there is no `return` statement. Single line arrow functions can use *concise body syntax*, or *implicit return*, which allows the omission of the curly brackets and the `return `keyword.

If the function body has more than a single line, enclose it in curly braces and include the `return` statement (if appropriate.) This example shows what the anonymous function in the earlier example looks like when written as an arrow function.

```typescript
let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            ontinue;
        }
            total += Number(input[i]);
        }
        return total;
}

```

> [!TIP]
> TIP Arrow functions were introduced in ES2015 so not all browsers support them. By using TypeScript, you can take advantage of these function types and then transpile down to earlier JavaScript versions, if necessary, so your code will work with older browsers.

