Inheritance enables you to establish relationships and build hierarchies of classes in object composition.

For example, you can `extend` the `Car` class to create a new class called `ElectricCar`. The `ElectricCar` class will **inherit** properties and methods of the `Car` class but can also have its own unique attributes and behaviors, like `range` and `charge`. So, by extending the `Car` class, you can create new classes that reuse the code in the `Car` class and then build on it.

![The Car class includes the properties make, color and, doors and the methods accelerate, brake, and turn. When the ElectricCar class extends Car, it includes all of the properties and methods of Car, plus a new property called range and a new method called charge.](../media/m05_car_class.jpg)

`ElectricCar` is a **subclass** that uses the `extends` keyword to derive from the Car **base class**. (Base classes are also called **superclasses** or **parent classes**.) Because `ElectricCar` extends the functionality from `Car`, you can create an instance of `ElectricCar` that can `accelerate` , `brake`, and `turn`. If you needed to make changes to the code in the base class, you only need to change it in the `Car` class and then all subclasses of `Car` will inherit those changes.

Some reasons to use inheritance include:

- Code reusability. You can develop once and reuse it in many places. This also helps you avoid redundancy in your code.
- You can use one base to derive any number of subclasses in a hierarchy. For example, the subclasses in the `Car` hierarchy could also include an `SUV` class or a `Convertible` class.
- Instead of having to make code changes in many different classes that have similar functionality, you just need to make the changes once in the base class.

## Extend a class

Continue working in the Playground and create a new `ElectricCar` class.

1. Below the `Car` class, create a new class called `ElectricCar` that `extends Car`.

    ```typescript
    class ElectricCar extends Car {
        // Properties unique to ElectricCar
    
        // Constructor
    
        // Accessors
    
        // Methods
    
    }
    ```

1. Declare the property that is unique to the `ElectricCar` class, `_range`, as a `private` property of type `number`.

    ```typescript
    // Properties
    private _range: number;
    ```

1. The `constructor` for the subclass is different from the `constructor` for the base class in a few ways.

      - The parameter list can include any of the properties of both the base class and the subclass. (As with all parameter lists in TypeScript, remember that required parameters must appear before optional parameters.)
      - In the body of the `constructor`, you must add the `super()` keyword to include the parameters from the base class. The `super` keyword executes the `constructor` of the base class when it runs.
      - The `super` keyword must appear before any references to `this.` when referring to properties in the subclass.

1. Define the class `constructor` for `ElectricCar`, including the `_make`, `_color`, and `_doors` properties of the base class and the `_range` property of the subclass. In this `constructor`, set the default value of the `doors` parameter to `2`.

    ```typescript
    // Constructor
    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    ```

1. Define the `get` and `set` accessors for the `range` parameter.

    ```typescript
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    ```

1. Enter the following `charge` method that returns a message to the console. This method includes a call to the `worker` function that you defined in the `Car` class. But it raises the error **Property 'worker' is private and only accessible within class 'Car'**. Do you know how to correct this problem?

    ```typescript
    // Methods
    charge() {
        console.log(this.worker() + " is charging.")
    }
    ```

1. In the `Car` class, change the access modifier of the `worker` function from `private` to `protected`. This allows subclasses of the `Car` class to use the function, while keeping it hidden from the members available to objects instantiated from the class. The error in the `charge` method should now resolve.
1. Test the new `ElectricCar` class to verify that it's working as expected.

    ```typescript
    let spark = new ElectricCar('Spark Motors','silver', 124, 2);
    let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
    console.log(eCar.doors);         // returns the default, 2
    spark.charge();                  // returns "Spark Motors is charging"
    ```

## Override a method

When a derived class has a different definition for one of the member functions of the base class, the base function is said to be **overridden**. Overriding is what happens when you create a function in a subclass with the same name as the function in the base class but, it has different functionality.

For example, assume that electric cars use a different type of braking system than traditional cars called regenerative braking. So, you may want to override the `brake` method in the `Car` base class with a method that is specialized for the `ElectricCar` subclass.

Continue working in the Playground.

1. Define a new `brake` method in the `ElectricCar` class that has different implementation details. Note that the parameter signature and return type for the `brake` method must be the same as the `brake` method in the `Car` class.

    ```typescript
    // Overrides the brake method of the Car class
    brake(): string {
        return console.log(this.worker() + ' is braking with the regenerative braking system.')
    }
    ```

1. Test the new method and verify that it works as expected.

    ```typescript
    console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"
    ```
