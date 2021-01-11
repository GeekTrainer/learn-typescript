Let's explore the different data types TypeScript makes available, and the impact they have on our code.

## Creating an enum

Enums (or enumerations) allow you to specify a list of available options. They're extremely useful when you have a set of values a particular variable type may take. Let's imagine you have field in a external database called **ContractStatus**, which contains numbers 1, 2, or 3, that represent the following contact statuses: **Permanent**, **Temp**, and **Apprentice**. We will create an enum with these values, and explore the TypeScript support.

1. Open the [Playground](https://www.typescriptlang.org/play) and remove any existing code
1. Create an `enum` to represent our scenario this by entering the following:

    ```typescript
    enum ContractStatus {
         Permanent,
         Temp,
         Apprentice
    }
    ```

1. Now, declare a variable for a new employee named `employeeStatus` of the type `ContractStatus` and assign `"Temp"`. Display the result to the console.

    ```typescript
    let employeeStatus: ContractStatus = ContractStatus.Temp;
    console.log(employeeStatus);
    ```

1. Click **Run**. Note the value displayed in the **Log** window. What value is returned?
1. By default, `enum` values begin with a value of 0, so `Permanent` is 0, `Temp` is 1, and `Apprentice` is 2. If you want the values to start with a different value, in this case 1, specify that in the `enum` declaration. Make the following edits to have the `enum` start the values at 1.

    ```typescript
    enum ContractStatus {
         Permanent = 1,
         Temp,
         Apprentice
    }
    ```

1. Rerun the code by clicking **Run**. Notice the value displayed is now **2**.
1. To display the name associated with he enum, we can use the indexer provided. Add the following to the bottom of your code:

    ```typescript
    console.log(ContractStatus[employeeStatus]);
    ```

1. Run the code. Notice the value **Temp** is displayed, which is the name of the enum for **Temp** or **2**.
