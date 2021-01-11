A **function expression** is a function that is not pre-loaded into the execution context, and only runs when the code encounters it. Function expressions are created at runtime and must be declared before they can be called. (This means that they are not hoisted, unlike named function declarations that are hoisted as soon as program execution begins and can be called before its declaration.)

Function expressions represent values so they are usually assigned to a variable or passed to other functions, and can be anonymous, meaning the function has no name.

This example assigns a `function` expression to the variable `addNumbers`. Notice that function appears in place of the function name, making the function anonymous. You can now use this variable to call the function.

```typescript
let addNumbers = function (x: number, y: number): number {
   return x + y;
}
addNumbers(1, 2);
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
let addNumbers1 = function (x: number, y: number): number {
   return x + y;
}

// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;
```

In this example, notice also that the curly braces have been removed and there is no `return` statement. Single line arrow functions can use **concise body syntax**, or **implicit return**, which allows the omission of the curly brackets and the `return` keyword.

If the function body has more than a single line, enclose it in curly braces and include the `return` statement (if appropriate.) This example shows what the anonymous function in the earlier example looks like when written as an arrow function.

```typescript
let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}
```

> [!TIP]
> Arrow functions were introduced in ES2015 so not all browsers support them. By using TypeScript, you can take advantage of these function types and then transpile down to earlier JavaScript versions, if necessary, so your code will work with older browsers.
