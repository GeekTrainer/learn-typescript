
Choose the best response for each of the questions below. Then select **Check your answers**.

## quiz title: Check your knowledge

## Multiple Choice

How many `constructor` functions can you include in a class definition?

()Any number.{{Multiple `constructor` declarations are not allowed in a class definition.}}

(x)One.{{You can declare one `constructor` function in a class definition. If omitted, an automatic constructor will be provided for you.}}

()None.{{All classes require a `constructor` function.}}

## Multiple Choice

What happens if you omit the `get` accessor for a class property?

()You will not be able to set its value from your code.{{If you omit the `set` accessor, you will not be able to set the value from your code.}}

()Nothing. TypeScript automatically provides `get` accessor functionality if it is omitted.{{TypeScript does not automatically provide getter or setter functionality.}}

(x)You will not be able to return its value from your code.{{The property becomes inaccessible if the `get` accessor is omitted.}}

## Multiple Choice

Which access modifier should you use if you dont want a method to be accessible from code outside the class but also want to make it available inside other classes that derive from the class?

()`readonly`{{The `readonly` modifier applies to properties. It prevents you from changing the value of a property after it has been initialized.}}

()`private`{{The `private` modifier makes the method visible only within the class in which it is defined.}}

(x)`protected`{{The `protected` modifier prevents the method from being visible outside of the class, while also allowing derived classes to use it.}}

## Multiple Choice

When extending a class, what is the purpose of the `super` keyword?

(x)It executes the `constructor` of the base class when it runs.{{Before initializing the properties in the subclass, the `super` keyword executes the `constructor` of the base class. It must appear before any instance of `this.`.}}

()It initializes the properties in the subclass.{{Properties of the subclass are initialized using the syntax `this.property = parameter` syntax.}}

()It overrides the properties of the base class.{{It is not possible to override the properties of the base class from the subclass.}}
