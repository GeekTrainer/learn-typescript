Recall that in Typescript, you can use an interface to establish a "code contract" that describe the required properties of an object and their types. So, you can use an interface to ensure class instance shape. Class declarations may reference one or more interfaces in their `implements` clause to validate that they provide an implementation of the interfaces.

Continue working in the Playground.

1. Declare an `I`Car`` interface that describes the properties and methods of the Car class.

```typescript
interface ICar {

    make: string;

    color: string;

    doors: number;

    accelerate(speed: number): string;

    brake(): string;

    turn(direction: 'left' | 'right'): string;

}

```

1. Notice that the interface includes the parameters of the constructor, not the properties. Try including one of the private properties (for example, `_make: string`). TypeScript will raise an error because the interface can only describe the public facing side of the class and may not include private members (also referred to as static members.) This prohibits you from using them to check that a class also has the correct types for the private side of the class instance.

1. You can now implement the `I`Car`` interface in the Car class. As you build out the details for the class, TypeScript will ensure that the class adheres to the code contract described in the interface.

```typescript
class Car implements ICar {

    // ...

}

```

## Design considerations

You've learned a few ways to describe the shape of an object in TypeScript, including interfaces, functions, and now classes. All these approaches enable you to enforce type checking, so how do you choose the best approach?

When you're working on small projects where you're the only person doing the coding, the choice often comes down to personal preference. As you work on larger projects, often with a team of developers, you will encounter situations where one approach is preferable to another. There are also some philosophical differences between developers that may impact the choice.

### When to use interfaces

JavaScript does not support interfaces. They are a purely design time construct in TypeScript. So, why use an interface?

In TypeScript, interfaces have a broad range of uses. They describe a structure, so can be used anywhere you use a type (for example, when typing variables, parameters, or return values.) For example:

```typescript
interface someNumbers {

    x: number;

    y: number;

    z: number;

}

let result: someNumbers = { x: 1, y: 2, z: 3}

console.log(result.x + result.y + result.z); // returns 6

```

Interfaces can also describe a group of related properties and methods for an object. But while the interface provides the blueprint of the object, you still need a function or class that implements the interface to initialize the object and provide the implementation details. The interface enforces structure across these objects.

So, in TypeScript, use an interface when you want to:

- Provide an easy way to define types.

- Share and extend a structural definition across multiple classes or functions, while still allowing the implementation details to differ between them.

- Enforce structure and type checking of functions and classes, especially as you develop larger and more complex projects.

- Describe existing JavaScript APIs to clarify function parameters and return types.

### When to use functions and classes

You can develop functions and classes with or without an interface. The next question is: when do you use functions and when do you use classes?

Classes are like functions and, in a lot of cases, can be used interchangeably. Consider the following example, which defines a class and a function that perform the same task.

```typescript
class addNumbers {

    _x: number;

    _y: number;

    _z: number;

    constructor(x: number, y: number, z: number) {

        this._x = x;

        this._y = y;

        this._z = z;

    }

    get x() { return this._x }

    set x(x) { this._x = x}

    get y() { return this._y }

    set y(y) { this._y = y}

    get z() { return this._z }

    set z(z) { this._z = z}

    totalNumbers() {

        return this._x + this._y + this._z;

    }

}

function add (x: number, y: number, z: number): number {

    return x + y + z;

}

```

Many JavaScript developers are accustomed to using functions because, for such a long time, classes were not supported. And when you look at the previous example, why would you go through the trouble of creating a class when you can do the same thing in a couple lines of code?

The main reason to use classes instead of functions is when you want to be able to extend them to create different types of objects, inheriting from other classes to extend or specialize the behavior.

[REVIEWER NOTE: Do you have anything to add to this? I felt like it was time to have this discussion because there are so many ways to do the same thing.]

