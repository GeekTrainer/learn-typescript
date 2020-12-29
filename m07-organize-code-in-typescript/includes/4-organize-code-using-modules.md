Like namespaces, **modules** provide a way to organize and categorize your code, enabling you to group related code together. Also, when code is inside a module, it is pulled from the global scope and into the scope of the module. This can help you avoid naming conflicts between components in the global namespace.

> [!TIP]
> Modules have been a feature of JavaScript since ES6, so they are also supported by TypeScript. Before ES6, earlier versions of TypeScript referred to modules as "external modules".

You can export any declaration (such as a variable, function, class, type alias, or interface) by adding the `export` keyword or import it by using the `import` keyword. Any file containing a top-level `import` or `export` statement is considered a module.

The `export` statement explicitly makes a component in one module available to other modules, while the `import` statement allows you to consume that component from another module. Modules are declarative; the `import` and `export` statements at the file level describe the relationships between them.

![Modules are connected to each other through a series of export and import statements. ](../media/m07_modules.jpg)

Returning to the greetings example in the earlier units, how can this scenario be implemented as modules instead of namespaces? Recall that the example includes two functions called `returnGreeting` that each perform different tasks, plus a helper function called `getLength` that's used by one of the `returnGreeting` functions. Let's see what this scenario looks like implemented as modules.

> [!NOTE]
> To implement modules, you need to use an IDE. This is not possible to do this in the Playground. See the Lab setup section later in this module for more information about setting up a development environment in Visual Studio Code.

## Exercise - Export a module component

In this exercise, you'll organize related functions into separate modules and then export the function declarations.

1. Create a new file called **Greetings_module.ts** that contains the first `returnGreeting` function, with the `export` keyword added before the function name so it is available to other modules.

    ```typescript
    export function returnGreeting (greeting: string) {
        console.log(`The message from Greetings_module is ${greeting}.`);
    }
    ```

2. Create a second file called **GreetingsLength_module.ts** that contains the second `returnGreeting` function and the `getLength` function. (This eliminates the naming conflict that you would have if both `returnGreeting` functions were in the same module.) Add `export` before the `returnGreeting` function so it is available to other modules. It is not necessary to export the `getLength` function because it is only used within the scope of the module.

    ```typescript
    export function returnGreeting (greeting: string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
        return message.length
    }
    ```

## Exercise - Import a module component

In this exercise, you'll import components from each of the two modules into a new module.

1. Create a new file called **Main.ts**. This file contains the main code of the application, including the `import` statements.
2. Import the `returnGreeting` function from **Greetings_module.ts** using the `import` keyword. The first statement below imports a single function. If **Greetings_module.ts** had contained multiple components, you could import the entire module into a single variable (for example, `allGreetingFunctions`), as shown in the second statement. You can then use the variable to access the module exports.

    ```typescript
    import { returnGreeting } from './Greetings_module';         // imports a single function in the module
    import * as allGreetingFunctions from './Greetings_module';  // imports all exported components in the module
    ```

3. Try importing the `returnGreeting` function from **GreetingsLength_module.ts** using the statement `import { returnGreeting } from './ GreetingsLength_module.ts'`. You'll notice an error because both files contain a `returnGreeting` function and you now have a naming conflict in the global scope of **Main.ts**. You can correct the issue by assigning the second instance of `returnGreeting` a new name. Replace `{ returnGreeting }` with `{ returnGreeting as returnGreetingLength }`. You can now use `returnGreetingLength` in place of the function name in your code.

    ```typescript
    import { returnGreeting as returnGreetingLength } from './GreetingsLength_module';
    ```

4. Now, you can use the `returnGreetings` functions in your code.

    ```typescript
    returnGreeting("Hola!")  // Displays 'The message from Greetings_module is Hola!'
    allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
    returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
    ```

## Compiling modules

Modules import one another using a module loader. At runtime, the module loader locates and executes all dependencies of a module before executing it. Depending on the module target that you specify during compilation, the compiler will generate appropriate code for Node.js ([CommonJS](https://nodejs.org/api/modules.html)), require.js ([AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)), [UMD](https://github.com/umdjs/umd), [SystemJS](https://github.com/systemjs/systemjs), or [ECMAScript 2015 native modules](https://www.ecma-international.org/ecma-262/6.0/) (ES6) module-loading systems. 

> [!TIP]
> You can use CommonJS in most scenarios.

To compile a module, specify a `--module` target on the command line. In the previous example, you can compile the **Main.ts** module for Node.js with the following command:

`tsc --module commonjs Main.ts`

As with `reference` tags, the compiler follows `import` statements to compile dependent files. When compiled, each module will become a separate **.js** file.

[REVIEWER NOTE - All this works when I run Main.js with node at the command line. However, I get an error that says " Uncaught ReferenceError: exports is not defined at Main.js:2 " when I try to load Main.js from an HTML page in the browser. Do you know why?]
