Interfaces can extend each other. This enables you to copy the members of one interface into another, giving you more flexibility in how you separate your interfaces into reusable components.

When extending an interface with one or more interfaces, these rules apply:
- You must implement all the required properties from all interfaces.
- Two interfaces can have the same property if the property has the exact same name and type.
- If two interfaces have a property with the same name but different types, you must declare a new property such that the resulting property is a subtype of both interfaces.

## Exercise - Extend an interface

There are several types of desserts you can create from the ``IceCream`` interface (sundaes, milkshakes, and so on), but they all have different properties in addition to those declared in IceCream. Let's extend the interface with a new one called `Sundae` and declare its properties.

Continue your project in the [Playground](https://www.typescriptlang.org/play).

1. Under the ``IceCream`` interface declaration, declare a new interface called ``Sundae`` that `extends` the IceCream interface. The Sundae interface includes four new properties:
  - `sauce` of literal type `'chocolate' | 'caramel' | 'strawberry'`
  - `nuts` of type `boolean` (optional)
  - `whippedCream` of type `boolean` (optional)
  - `instructions` of type `boolean` (optional)

```typescript
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: boolean;
}
```

2. You should notice an error in the new interface. TypeScript has found that both the `IceCream` and `Sundae` interfaces have a property called ``instructions``, but they are of different types. To resolve this error, let's make both instructions properties of the same type, `string`.
1. Let's try out the new interface by changing the `myIceCream` variable to type ``Sundae``. This generates an error stating that **Property '`sauce`' is missing in type '{ flavor: string; scoops: number; }' but required in type 'Sundae'**. You added four new properties to the Sundae interface but only the sauce property was required.

```typescript
let myIceCream: Sundae = {
        flavor: 'vanilla',
        scoops: 2
}

```

4. Fix the error by adding the required property, plus any of the optional properties that you want to use.

```typescript
let myIceCream: Sundae = {
        flavor: 'vanilla',
        scoops: 2,
        sauce: 'caramel',
        nuts: true
}

```

5. Now, let's update the ``Sundae`Order` class to implement the new Sundae interface. This generates the same error as before. Fix the error by adding the `sauce` property to the class definition.

```typescript
class SundaeOrder implements Sundae {
    _flavor: string;
    _scoops: number;
    _sauce: 'chocolate' | 'caramel' | 'strawberry';
    constructor(flavor: string, scoops: number, sauce: 'chocolate' | 'caramel' | 'strawberry') {
        this._flavor = flavor;
        this._scoops = scoops;
        this._sauce = sauce;
    }
    get flavor() {
      return this._flavor;
    }
    set flavor(flavor) {
      this._flavor = flavor;
    }
    get scoops() {
      return this._scoops;
    }
    set scoops(scoops) {
      this._scoops = scoops;
    }
    get sauce() {
      return this._sauce;
    }
    set sauce(sauce) {
      this._sauce = sauce;
    }
}
```

6. Finally, resolve the last errors in the code. The `dessert1` variable declaration is raising an error, but the call to the ``tooManyScoops`` function looks good. Why? The tooManyScoops function is still using `IceCream` as its parameter type so it is only expecting the first two properties. The terms of the code contract have been met. Correct the errors in the variable declaration statements by adding a value for the required `sauce` property.

```typescript
let dessert1 = new SundaeOrder('vanilla', 3, 'strawberry');
console.log(tooManyScoops(dessert1));
```
