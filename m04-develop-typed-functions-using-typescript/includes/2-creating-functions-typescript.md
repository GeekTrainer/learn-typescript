In JavaScript, function definitions do not specify data types for parameters, perform type checking on the passed arguments, or check the number of arguments received, so you must add the logic for checking these parameters to your functions.

TypeScript simplifies the development of functions and makes them easier to troubleshoot by enabling you to type parameters and return values. TypeScript also adds new options for parameters. For example, while all parameters are optional in JavaScript functions, you can choose to make parameters required or optional in TypeScript.

Adding types to functions help prevent you from passing values that you shouldn't pass to your functions. This is especially important when you're working with larger code bases or functions developed by others. And Intellisense provides type hints for function parameters when you invoke them. This built-in documentation is a great benefit given that JavaScript can rarely if ever determine the data type of a parameter.

As in JavaScript, you can define functions in TypeScript several different ways. Let's look at how these functions differ with the addition of types in TypeScript.

## Named functions

A named function is a function declaration written with the `function` keyword and provided with a distinct name within the current scope. Named function declarations load into the execution context before any code runs. This is known as hoisting, meaning you can use the function before you declare it.

The syntax for declaring a named function in TypeScript is the same as defining one in JavaScript. The only difference with TypeScript that you can now provide a type annotation for the function's parameters and return value.



While adding types is a simple difference, it offers the benefit of type checking the values that you pass to the function and what is returned. Instead of having to add all the logic to the function to verify the correct value type has been passed to it and the return value is correct, TypeScript helps ensure the correct value types as you develop your code. In addition, when creating the function logic you will have full autocomplete support, as your editor will know the datatype of the parameters - something JavaScript is typically unable to detect. This is especially helpful when you're using functions developed by others because TypeScript clarifies the required input and output types.
