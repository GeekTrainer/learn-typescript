Once you have decided that you need an interface, the process of declaring it in TypeScript is straightforward.

To declare an interface, start with the `interface` keyword followed by the interface name (the identifier.) The interface name may not be one of the predefined type names in the type system. And, by convention, interface names are in CamelCase.

Then, define the properties (or members) of the interface and their type. Properties can be required, optional, or read only.

| Property type| Description| Example|
| :--- | :--- | :--- |
| Required| All properties are required, unless otherwise specified.| `firstName: string;`|
| Optional| Add a question mark (`?`) to the end of the property name. Use this for properties that are not required. This prevents the type system from raising an error if the property is omitted.| `firstName?: string;`|
| Read only| Add the readonly keyword in front of the property name. Use this for properties that should only be modified when an object is first created.| `readonly firstName: string;`|

## Exercise - Declare an interface with members

Let's open the [Playground](https://www.typescriptlang.org/play) and declare and implement a new interface.

1. Declare an interface named `IceCream` that includes two properties: `flavor` as a `string` and `scoops` as a `number.`

        ```typescript
        interface IceCream {
                flavor: string;
                scoops: number;
        }
        ```

2. Now, you can implement the new interface. Let's start by using the `IceCream` interface as a type in a variable declaration. Declare a new variable called `myIceCream` as type `IceCream` and then assign values to the required properties. Notice as you start to type the property names, Intellisense suggests the correct names and types. Check your work by returning the value of one of the properties to the console.

        ```typescript
        let myIceCream: IceCream = {
                flavor: 'vanilla',
                scoops: 2
        }

        console.log(myIceCream.flavor);

        ```

3. Next, let's create a function called `tooManyScoops` that uses the `IceCream` interface as parameter type. This function checks the number of scoops in the IceCream object and returns a message based on the result. To test your work, pass in the object `{flavor: 'vanilla', scoops: 5}` as a parameter and check the result by returning it to the console.

        ```typescript
        function tooManyScoops(dessert: IceCream) {
                if (dessert.scoops >= 4) {
                        return dessert.scoops + ' is too many scoops!';
                } else {
                        return 'Your order will be ready soon!';
                }
        }

        console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));
        ```

4. After running the code, your output to the console should look like this.

        ```console
        "vanilla"
        "5 is too many scoops!"
        ```

5. Open the JavaScript pane and notice the differences between the JavaScript code and the TypeScript code. The interface has no representation in the JavaScript code.

1. What happens if you add another property to the `IceCream` interface? Let's add a new property called `instructions` and assign it the `string` type.

1. Review the errors that appear in your code. To resolve them, you should add the `instructions` property to the implementation details of the variable declaration and add it as a parameter passed to the function. For now, make the `instructions` property optional by adding a question mark to the property name. All the errors should resolve because the `instructions` property is no longer required by the interface.

1. You can also use an interface to ensure class instance shape. Class declarations may reference one or more interfaces in their `implements` clause to validate that they provide an implementation of the interfaces. (You'll learn more about classes in a later module.) Let's declare a simple class called `SundaeOrder` that implements the `IceCream` interface with the `implements` keyword and gets and sets its properties. Make sure that all the required properties in the `IceCream` interface are represented in the class. Test your work by declaring a variable of type `SundaeOrder` and then pass it as a parameter to the `tooManyScoops` function.

        ```typescript
        class SundaeOrder implements IceCream {
            _flavor: string;
            _scoops: number;
            constructor(flavor: string, scoops: number) {
                this._flavor = flavor;
                this._scoops = scoops;
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
        }

let dessert1 = new SundaeOrder('vanilla', 3);
console.log(tooManyScoops(dessert1));
```

So far, so good! But an ice cream sundae without toppings is just… ice cream. Next, we'll look at how to extend an interface.

