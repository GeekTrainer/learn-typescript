The object types are all class, interface, array, and literal types (anything that is not a primitive type.) For now, let's look at the array and literal types.

## Arrays

TypeScript, like JavaScript, allows you to work with arrays. Arrays can be written in one of two ways. In the first, you use the type of the elements followed by square brackets (`[ ]`) to denote an array of that element type:

```typescript
let list: number[] = [1, 2, 3];
```

The second way uses a generic `Array` type, using the syntax `Array<type>`:

```typescript
let list: Array<number> = [1, 2, 3];
```

There is no advantage to using one over the other so it's up to you to decide which syntax to use.

## Literal types

A literal is a more concrete sub-type of a collective type. What this means is that `"Hello World"` is a `string`, but a `string` is not `"Hello World"` inside the type system.

There are three sets of literal types available in TypeScript: `string`, `number`, and `boolean`. By using literal types, you can specify an exact value that a string, number, or boolean must have (for example, "yes", "no", or "maybe".)

### What is literal narrowing?

When you declare a variable using `var` or `let` in TypeScript, you are telling the compiler that there is the chance that this variable will change its contents. Declaring a variable with let types the variable (for example, as a `string`), allowing for an infinite number of potential values.

In contrast, using `const` to declare a variable will inform TypeScript that this object will never change. Declaring with `const` types it to the value (for example, "Hello World").

The process of going from an infinite number of potential cases to a smaller, finite number of potential cases is called narrowing.

### Defining literal types

Literal types are written as object, array, function, or constructor type literals and are used to compose new types from other types.

The best way to demonstrate the use of literal types is with an example. This type definition creates a literal type called `testResult`, which can contain one of three `string` values:

```typescript
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
myResult = "failure";       //* Invalid
```

When setting the value of the variable `myResult`, `"incomplete"` and `"pass"` are valid entries, while `"failure"` is not because it is not one of the items in the `testResult` type definition.

TypeScript also has numeric literal types, which act the same as the string literals above. For example:

```typescript
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
diceRoll = 7;    //* Invalid
```

You can also use `boolean` values when defining literal types, or any combination of types.
