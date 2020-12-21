In this lab, you will extend the functionality of a class by using generics.

## Lab setup

You can use the TypeScript [Playground](https://www.typescriptlang.org/play) or Visual Studio Code to complete this lab.

### Playground

If you’re using the Playground, copy and paste the starting code into it as directed in the lab instructions.

### Visual Studio Code

If you’re using an existing Visual Studio Code workspace, add a new file named **module06.ts** to your project and copy and paste the starting code into it as directed in the lab instructions.

You can also download the starting workspace at [LINK TO \code\module-06\m06-start] and edit the file **module06.ts**. To run the solution, you must first set up your development environment by installing the following software on your machine:

- Visual Studio Code (or IDE of your choice)

- Node Package Manager (npm)

- TypeScript Compiler (tsc)

For best results, follow the complete instructions for setting up your environment and using the TypeScript compiler in [LINK TO Module 01: Get started with TypeScript ]. After setting up your environment, you can run any of the Lab setup or solution files in the "Developing JavaScript applications using TypeScript" [LINK TO the Developing JavaScript applications using TypeScript] learning path.

## Exercise 1

The `DataStore` class contains utility functions that can store up to 10 `string` items in an array and return the value stored in each item.

1. Copy and paste the following JavaScript code your TypeScript editor.

```typescript
// TODO: Add a type variable called T to the class declaration.

class DataStore {

    //TODO: Add the type variable to the _data property declaration.

    private _data = new Array(10);

    //TODO: Update the type of the item parameter in the AddOrUpdate function to use the type variable.

    AddOrUpdate(index: number, item: string) {

        if(index >=0 && index <10) {

            this._data[index] = item;

        } else {

            alert('Index is greater than 10')

        }

    }

    GetData(index: number) {

        if(index >=0 && index < 10) {

            return this._data[index];

        } else {

            return

        }

    }

}

let cities = new DataStore();

cities.AddOrUpdate(0, "Mumbai");

cities.AddOrUpdate(1, "Chicago");

cities.AddOrUpdate(11, "London");       // item not added

console.log(cities.GetData(1));         // returns 'Chicago'

console.log(cities.GetData(12));        // returns 'undefined'

```

1. Rewrite the `DataStore` class so it can store `items` of any type.

   1. Add a type variable called `T` to the class declaration.

   1. Add the type variable to the `_data` property declaration.

   1. Update the type of the `item` parameter in the `AddOrUpdate` function to use the type variable.

1. Test the type variable can accept numbers. Declare a new variable called `empIDs` and assign a new `DataStore` object to it. Call the `AddOrUpdate` function and assign number type items to it.

1. Test that the type variable can accept a custom object. Declare a type called ``Pet`s` that contains three properties: `name` as a ``string``, `breed` as a string, and `age` as a `number`. Declare a new variable called `pets` and assign a new `DataStore` object to it. Call the `AddOrUpdate` function and assign Pet objects to it.

## Lab solution

Download the solution workspace [LINK TO \code\module-06\m06-end] and open the file **module06.ts** to see the solution to this lab. See the **Lab setup** section above for more information about setting up your development environment to run the solution.

