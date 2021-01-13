In JavaScript, you use external libraries in your code by using the `requires` statement. You can also use external libraries in TypeScript, but you gain access to these external libraries by using the `import` statement to import type definitions. After importing a type definition, your IDE can provide Intellisense and type checking.

> [!NOTE]
> You must use an IDE, such as Visual Studio Code, to implement external type libraries. It is not possible to do this in the TypeScript Playground. Before completing the exercise, see the Lab setup section later in this module for more information about setting up a development environment in Visual Studio Code.

In this exercise, you'll install and implement a type library called [dotenv](https://www.npmjs.com/package/dotenv). This commonly used library loads environment variables from a **.env** file into `process.env`, enabling you to store configuration details in the environment separate from your code and access them.

1. Open a new workspace in Visual Studio Code.
1. Add a new file called **Main.ts**.
1. From the terminal, generate a new **tsconfig.json** file with default configuration settings.

    ```bash
    tsc --init
    ```

1. The open-source project [DefinitelyTyped](https://definitelytyped.org/) is a repository of TypeScript type definitions for most existing JavaScript libraries. Search for the **dotenv** type library. DefinitelyTyped will provide the name of the library to install and other implementation details.

    > [!TIP] 
    > Some npm packages include its declaration file, while others are installed as a separate step. See the installation details for the library you want to use to determine if you need to download the corresponding @types package.

1. From the terminal, use `npm` to install the **dotenv** type library in your project folder.

    ```bash
    npm install dotenv
    ```

1. The **dotenv** type definition also requires you to install **node** type definition. **node** provides access to `process.env` so you can use it in your code.

    ```bash
    npm install @types/node
    ```

1. Create a new file in the root directory of your project called **.env**. This file will contain environment-specific variables for the project.
1. In **.env**, add the variables on new lines in the form of `NAME=VALUE`. For this example, define three variables:

    ```typescript
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=P@ssw0rd
    ```

1. In **Main.ts**, import the **dotevn** type library.

    ```typescript
    import dotenv from 'dotenv';
    ```

1. Assign `dotenv.`config`()` to a variable. config reads your **.env** file, parses the contents, assigns it to `process.env`, and returns an object with a parsed key containing the loaded content or an error key if it failed.

    ```typescript
    const result = dotenv.config();
    ```

1. TypeScript can now provide Intellisense and type checking for the `config` object. If you type ``result``., you see that result has two optional properties: `error` and `parsed`. Add an error checking statement to verify that the operation worked as expect.

    ```typescript
    if (result.error) {
        throw result.error;
    }
    ```

1. Return the contents of the `parsed` property to the console.

    ```typescript
    console.log(result.parsed);  // Returns { DB_HOST: 'localhost', DB_USER: 'root', DB_PASS: 'P@ssw0rd' }
    ```

1. Access the values contains in each key in `process.env` and return the value to the console.

    ```Choose a language.
    console.log(process.env.DB_HOST);
    console.log(process.env.DB_USER);
    console.log(process.env.DB_PASS);
    ```
