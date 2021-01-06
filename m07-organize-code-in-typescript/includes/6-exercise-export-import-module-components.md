Returning to the greetings example in the earlier units, how can this scenario be implemented as modules instead of namespaces? Recall that the example includes two functions called `returnGreeting` that each perform different tasks, plus a helper function called `getLength` that's used by one of the `returnGreeting` functions. Let's see what this scenario looks like implemented as modules.

> [!NOTE]
> You must use an IDE, such as Visual Studio Code, to implement multi-file namespaces and modules. It is not possible to do this in the TypeScript Playground. Before completing the exercise, see the **Lab setup** section later in this module for more information about setting up a development environment in Visual Studio Code.

## Export a module component

In this part of the exercise, you'll organize related functions into separate modules and then export the function declarations.

1. Download a new copy of the starting workspace for the exercise at [LINK TO \code\module-07\m07-exercise-start] and edit the file **module07_exercise.ts**. This file contains three functions. You'll notice that there is a naming conflict because two of the functions have the same name. You'll solve this problem by organizing the functions into modules.
2. Create a new file called **Greetings_module.ts** and then move the first `returnGreeting` function from **module07_exercise.ts** into it. Add the `export` keyword before the function name so it is available to other modules.

    ```typescript
    export function returnGreeting (greeting: string) {
        console.log(`The message from Greetings_module is ${greeting}.`);
    }
    ```

3. Create a second file called **GreetingsLength_module.ts** and then move the second `returnGreeting` function and the `getLength` function from **module07_exercise.ts** into it. (This eliminates the naming conflict that you had with both `returnGreeting` functions were in the same file.) Add `export` before the `returnGreeting` function so it is available to other modules. It is not necessary to export the `getLength` function because it is only used within the scope of the module.

    ```typescript
    export function returnGreeting (greeting: string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
        return message.length
    }
    ```

## Import a module component

In next part of the exercise, you'll import components from each of the two modules into a new module.

1. Create a new file called **Main.ts**. This file contains the main code of the application, including the `import` statements.
2. Import the `returnGreeting` function from **Greetings_module.ts** using the `import` keyword. The first statement below imports a single function. If **Greetings_module.ts** had contained multiple components, you could import the entire module into a single variable (for example, `allGreetingFunctions`), as shown in the second statement. You can then use the variable to access the module exports.

    ```typescript
    import { returnGreeting } from './Greetings_module.js';         // imports a single function in the module
    import * as allGreetingFunctions from './Greetings_module.js';  // imports all exported components in the module
    ```

    > [!IMPORTANT]
    > If you want to run the resulting JavaScript in a web browser, you must append the **.js** file extension to the file name in the `import` statement. To learn more, see [Compiled JavaScript import is missing file extension](https://github.com/microsoft/TypeScript/issues/40878).

3. Try importing the `returnGreeting` function from **GreetingsLength_module.ts** using the statement `import { returnGreeting } from './GreetingsLength_module'`. You'll notice an error because both files contain a `returnGreeting` function and you now have a naming conflict in the global scope of **Main.ts**. You can correct the issue by assigning the second instance of `returnGreeting` a new name. Replace `{ returnGreeting }` with `{ returnGreeting as returnGreetingLength }`. You can now use `returnGreetingLength` in place of the function name in your code.

    ```typescript
    import { returnGreeting as returnGreetingLength } from './GreetingsLength_module.js';
    ```

4. Now, you can use the `returnGreetings` functions in your code.

    ```typescript
    returnGreeting("Hola!")  // Displays 'The message from Greetings_module is Hola!'
    allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
    returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
    ```

## Compiling modules

Modules import one another using a module loader. At runtime, the module loader locates and executes all dependencies of a module before executing it. Depending on the module target that you specify during compilation, the compiler will generate appropriate code for Node.js ([CommonJS](https://nodejs.org/api/modules.html)), require.js ([AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)), [UMD](https://github.com/umdjs/umd), [SystemJS](https://github.com/systemjs/systemjs), or [ECMAScript 2015 native modules](https://www.ecma-international.org/ecma-262/6.0/) (ES6) module-loading systems. 

To compile modules, specify a `--module` target on the command line or in the **tsconfig.json** file for the project. In the previous example, you can compile the **Main.ts** module for Node.js with the following command:

`tsc --module commonjs Main.ts`

To compile the file for use in a web browser, use this command:

`tsc --module es6 Main.ts`

As with `reference` tags, the compiler follows `import` statements to compile dependent files. When compiled, each module will become a separate **.js** file.
