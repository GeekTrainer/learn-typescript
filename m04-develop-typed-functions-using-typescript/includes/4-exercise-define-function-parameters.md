The TypeScript compiler assumes, by default, that all parameters defined in a function are required. When a function is called, the TypeScript compiler verifies:

- A value as been provided for each parameter.
- Only parameters that the function requires are passed to it.

This is different from JavaScript, which assumes that all parameters are optional and allows you to pass more (or fewer) arguments to the function than are defined by it.

## Required parameters

All function parameters are required, unless otherwise specified, and the number of arguments passed to a function must match the number of required parameters the function expects.

1. Open the [Playground](https://www.typescriptlang.org/play) and remove any existing code.
1. Enter the following arrow function, which accepts three required parameters.

   ```typescript
   let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;
   ```

1. Try calling the function by entering `addThreeNumbers(10, 20)`. TypeScript raises the error **Expected 3 arguments but got 2. An argument for 'z' was not provided.** When it runs, the function returns `NaN` because the third argument was passed as `undefined`, making the calculation invalid.
1. What happens when you enter `addThreeNumbers(10, 20, 30, 40)`? TypeScript raises the error **Expected 3 arguments but got 4.** When it runs, the fourth argument drops off and the function returns `60`.

## Optional parameters

You can also define optional parameters by appending a question mark (?) to the end of the parameter name.

Continue the exercise in the Playground.

1. In the function, try making the `y` parameter optional. What happens?

   ```typescript
   let addThreeNumbers = (x: number, y?: number, z: number): number => x + y + z;
   ```

1. TypeScript **raises an error** because the position of the optional parameters matter. In the parameter list, optional parameters must follow all required parameters. Instead of the `y` parameter, try making the `z` parameter optional. Also, for this function to return the correct value, you must also update it to address the possibility that `z` may now be passed as `undefined`. You should now be able to call the function using `addThreeNumbers(10, 20)` or `addThreeNumbers(10, 20, 30)`.

   ```typescript
   let addThreeNumbers = (x: number, y: number, z?: number): number => {
       if((z === undefined)) {
           return x + y;
       } else {
           return x + y + z;
       }
   };
   ```

## Default parameters

You can also assign default values to optional parameters. If a value is passed as an argument to the optional parameter, that value will be assigned to it. Otherwise, the default value will be assigned to it.

As with optional parameters, default parameters must come after required parameters in the parameter list.

Continue the exercise in the Playground.

1. Enter the following arrow function, which accepts three required parameters.

   ```typescript
   let subtractThreeNumbers = (x: number, y: number, z: number): number => x - y - z;
   ```
   
1. Assign a default value of `100` to the `z` parameter by replacing `z: number` with `z = 100`.

   ```typescript
   let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;
   ```

2. Try running the function with two and three arguments to test the result.

   ```typescript
   subtractThreeNumbers(10, 20);       // returns -100 because 'z' has been assigned the value 100
   subtractThreeNumbers(10, 20, 15);   // returns -25
   ```

## Rest Parameters

In the previous example, you worked with a function that has a fixed number of parameters and returned the sum of the values passed to them. But what if you didn't know how many numbers would be passed as arguments or wanted to pass any number of values?

If you want to work with multiple parameters as a group (in an array) or don't know how many parameters a function will ultimately take, you can use rest parameters. Rest parameters are treated as a boundless number of optional parameters. You may leave them off or have as many as you want.

This example has one required parameter and an optional parameter called `restOfNumbers` that can accept any number of additional numbers. The ellipsis (`...`) before `restOfNumbers` tells the compiler to build an array of the arguments passed to the function and assigns the name that follows to it so you can use it in your function.

```typescript
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
   let total: number =  firstNumber;
   for(let counter = 0; counter < restOfNumbers.length; counter++) {
      if(isNaN(restOfNumbers[counter])){
         continue;
      }
      total += Number(restOfNumbers[counter]);
   }
   return total;
}
```

The function can now accept one or more values and return the result.

```typescript
addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5
```
