Let's start by reviewing the most basic and common types you might encounter when writing JavaScript or TypeScript code. These will later form the core building blocks of more complex types.

## Boolean type

The most basic datatype is the `true` or `false` value, known as a boolean.

For example:

```typescript
let flag: boolean;
let yes = true;
let no = false;
```

## Number and BigInteger types

As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating-point numbers get the type `number`, while BigIntegers get the type `bigint`. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

For example:

```typescript
let x: number;
let y = 0;
let z: number = 123.456;
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

In TypeScript, you can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote ( \` ) character, and embedded expressions are of the form `${ expr }`.

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

## Any type

The `any` type is the one type that can represent any JavaScript value with no constraints. This can be useful when you're expecting a value from a third-party library or user inputs where the value is dynamic because the `any` type will allow you to reassign different types of values. And, as mentioned earlier, using the `any` type allows you to gradually migrate your JavaScript code to use static types in TypeScript.

> [!IMPORTANT]
> Remember that all the convenience of `any` comes at the cost of losing type safety. Type safety is one of the main motivations for using TypeScript. You should avoid using `any` when it's not necessary.

## Unknown type

While flexible, the `any` type can cause unexpected errors. To address this, TypeScript introduced the `unknown` type.

The `unknown` type is similar to the `any` type in that any value is assignable to type `unknown`. However, you can't access any properties of an `unknown` type, nor can you call or construct them.

## Type assertion

If you need to treat a variable as a different data type you can use a **type assertion**. A type assertion tells TypeScript you have performed any special checks that you need before calling the statement. It tells the compiler "trust me, I know what I’m doing." A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime impact and is used purely by the compiler.

Type assertions have two forms. One is the `as`-syntax:

`(randomValue as string).toUpperCase();`

The other version is the "angle-bracket" syntax:

`(<string>randomValue).toUpperCase();`

> ![NOTE]
> `as` is the preferred syntax. Some applications of TypeScript, such as JSX, can get confused when using `< >` for type conversions.

## Type guards

The previous example demonstrates the use of `typeof` in the `if` block to examine the type of an expression at runtime. This is called a **type guard**.

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
