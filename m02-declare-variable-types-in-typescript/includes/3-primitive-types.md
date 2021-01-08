Let's start by reviewing the most basic and common types you might encounter when writing JavaScript or TypeScript code. These will later form the core building blocks of more complex types.

## Boolean type

The most basic datatype is the simple `true` or `false` value, which JavaScript and TypeScript call a `boolean` value.

For example:

```typescript
let b: boolean;
let yes = true;
let no = false;
```

## Number and BigInteger types

As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating-point numbers get the type `number`, while BigIntegers get the type `bigint`. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

For example:

```typescript
let x: number;
let y = 0;
let z: nuumber = 123.456;
let big: bigint = 100n;
```

## String type

The `string` keyword represents sequences of characters stored as Unicode UTF-16 code units. Like JavaScript, TypeScript also uses double quotes (`"`) or single quotes (`'`) to surround string data.

Some examples:

```typescript
let s: string;
let empty = "";
let abc = 'abc';
```

In TypeScript, you can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (`\`` ) character, and embedded expressions are of the form `${ expr }`.

For example:

```typescript
let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);
```

This example produces the output: 

```console
My name is Mateo.
    I am new to TypeScript.
```

## The void, null, and undefined types

JavaScript and TypeScript have two primitive values used to signal absent or uninitialized value: `null` and `undefined`. These types are most useful in the context of functions, so we'll discuss them in more detail in a later module.

## Exercise - Define an enum type

A helpful addition to the standard set of datatypes from JavaScript is the enumeration type, or `enum`.

Enumerations offer an easy way to work with sets of related constants. An `enum`, is a symbolic name for a set of values. Enumerations are treated as data types, and you can use them to create sets of constants for use with variables and properties.

Whenever a procedure accepts a limited set of variables, consider using an enumeration. Enumerations make for clearer and more readable code, particularly when meaningful names are used.

Using enumerations:

- Helps reduce errors caused by transposing or mistyping numbers.
- Makes it easy to change values in the future.
- Makes code easier to read, which means it is less likely that errors will creep into it.
- Ensures forward compatibility. With enumerations, your code is less likely to fail if in the future someone changes the values corresponding to the member names.

Let's open the [Playground](https://www.typescriptlang.org/play) and define an `enum`.

1. Assume that you have field in a external database called **contractStatus**, which contains numbers 1, 2, or 3, that represent the following contact statuses: Permanent, Temp, and Apprentice. Create an `enum` to represent this by entering the following:

    ```typescript
    enum contractStatus {
         Permanent,
         Temp,
         Apprentice
    }
    ```

2. Now, declare a variable for a new employee named `empStatus` of the type `contractStatus` and assign `"Temp"` to it:

    ```typescript
    let empStatus: contractStatus = contractStatus.Temp;
    ```

3. Log the value of `empStatus` to the console. What does it return?
4. By default, `enum` values begin with a value of 0, so `Permanent` is 0, `Temp` is 1, and `Apprentice` is 2. If you want the values to start with a different value, in this case 1, specify that in the `enum` declaration. Make the following edits to have the `enum` start the values at 1.

    ```typescript
    enum contractStatus {
         Permanent = 1,
         Temp,
         Apprentice
    }
    ```

5. When you log the value of `empStatus` to the console, it should now return 2. (You can also manually set all the values in the `enum` if they are not sequential.)
6. Finally, you can go from a numeric value to the name of that value in the `enum`. This is helpful if you need to remember what it is. Enter the following to return the name associated with the value 2, in this case `"Temp"`:

    ```typescript
    console.log(contractStatus[2]);
    ```

## Exercise - Define Any and Unknown types

If you are unsure of what a variable type will be, you can use the `any` or `unknown` types.

### Any type

The `any` type is the one type that can represent any JavaScript value with no constraints. This can be useful when you're expecting a value from a third-party library or user inputs where the value is dynamic because the `any` type will allow you to reassign different types of values. And, as mentioned earlier, using the `any` type allows you to gradually migrate your JavaScript code to use static types in TypeScript.

Let's open the [Playground](https://www.typescriptlang.org/play) and define a variable as `any`.

1. Enter the following variable declaration:

    ```typescript
    let randomValue: any = 10;

    randomValue = true;
    randomValue = 'Mateo';
    ```

2. Notice that the compiler doesn't throw an error because the `any` type encompasses values of every possible type.
3. The `any` type opts out of type checking and doesn't force you to do any checking before you call, construct, or access properties on these values. To test this, enter the following statements, which attempt to call:

      - A property that doesn't exist for the type.
      - `randomValue` as a function.
      - A method that only applies to a `string` type.


    ```typescript
    console.log(randomValue.name);  //* Logs "undefined" to the console
    randomValue();                  //* Returns "randomValue is not a function" error
    randomValue.toUpperCase();      //* Returns "randomValue is not a function" error
    ```

> [!IMPORTANT]
> Remember that all the convenience of `any` comes at the cost of losing type safety. Type safety is one of the main motivations for using TypeScript and you should try to avoid using `any` when it's not necessary.

### Unknown type

While flexible, the `any` type can cause unexpected errors. To address this, TypeScript introduced the `unknown` type.

The `unknown` type is similar to the `any` type in that any value is assignable to type `unknown`. However, you can't access any properties of an `unknown` type, nor can you call or construct them.

1. To see how this works, try changing the `any` type in the previous example to `unknown`:

    ```typescript
    let randomValue: unknown = 10;

    randomValue = true;
    randomValue = 'Mateo';

    console.log(randomValue.name);  //* Returns undefined.
    randomValue();                  //* Returns "randomValue is not a function" error
    randomValue.toUpperCase();      //* Returns "randomValue is not a function" error
    ```

2. You'll now see the errors in the code and can take appropriate action.

### Type assertion

If you want to instruct the type system to ignore an error, you can use a *type assertion*. A type assertion tells TypeScript that you have performed any special checks that you need before calling the statement. It tells the compiler “trust me, I know what I’m doing."

A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime impact and is used purely by the compiler.

Type assertions have two forms. One is the `as`-syntax:

`(randomValue as string).toUpperCase();`

The other version is the "angle-bracket" syntax:

`(<string>randomValue).toUpperCase();`

1. Let's remove the property, function, and method calls from the code example to eliminate the compiler errors. Then, we'll create a new statement that performs the necessary check to determine that `randomValue` is a `string` before calling the `toUpperCase` method using type assertion.

    ```typescript
    let randomValue: unknown = 10;

    randomValue = true;
    randomValue = 'Mateo';

    if (typeof randomValue === "string") {
        console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
    } else {
        console.log("Error - A string was expected here.");    //* Returns an error message.
    }

    ```

2. Now, TypeScript assumes that you have made the necessary check. The type assertion says that `randomValue` should be treated as a `string` and then the `toUpperCase` method can be applied.

## Type guards

The previous example demonstrates the use of `typeof` in the `if` block to examine the type of an expression at runtime. This is called a *type guard*.

You may be familiar with using `typeof` and `instanceof` in JavaScript to test for these conditions. TypeScript understands these conditions and will change type inference accordingly when used in an `if` block.

You can use the following conditions to learn the type of a variable:

| Type| Predicate|
| :--- | :--- |
| `string`| `typeof s === "string"`|
| `number`| `typeof n === "number"`|
| `boolean`| `typeof b === "boolean"`|
| `undefined`| `typeof undefined === "undefined"`|
| `function`| `typeof f === "function"`|
| `array`| `Array.isArray(a)`|

You'll see another use for type guards later in this module.
