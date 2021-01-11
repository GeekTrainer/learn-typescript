Union and Intersection types help you handle situations where a type is composed of two or more possible types.

## Union types

A **union** type describes a value that can be one of several types. This can be helpful when a value is not under your control (for example, values from a library, an API, or user input.)

The `any` type can also accept different types, so why would you want to use a union type? The union types restrict the assignment of values to the specified types, whereas the any type has no restrictions. Another reason is Intellisense support.

A union type uses the vertical bar or pipe (`|`) to separate each type. In the following example, `multiType` can be a `number` or a `boolean`:

```typescript
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid
```

Using type guards, you can easily work with a variable of a union type. In this example, the `add` function accepts two values that can be either a `number` or a `string`. If both values are number types, it adds them. If both are string types, it concatenates them. Otherwise, it raises an error.

```typescript
function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error
```

## Intersection types

Intersection types are closely related to union types, but they are used very differently. An intersection type combines two or more types to create a new type that has **all properties** of the existing types. This allows you to add together existing types to get a single type that has all the features you need.

An Intersection type uses the ampersand (`&`) to separate each type.
