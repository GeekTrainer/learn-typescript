In JavaScript, you use external libraries in your code by using the `requires` statement. You can also use external libraries in TypeScript, but you gain access to them by using the `import` statement. 

The open-source project [DefinitelyTyped](https://definitelytyped.org/) is a repository of TypeScript type definitions for most existing JavaScript libraries. Some packages include the library and its type declaration file, while others require you to install the @types as a separate step. See the installation details for the library you want to use to determine if you need to also download the corresponding @types package.

After importing a library and its type definition, you can use it in your code and gain the benefits of Intellisense and type checking.

> [!NOTE]
> You must use an IDE, such as Visual Studio Code, to implement external type libraries. It is not possible to do this in the TypeScript Playground. Before completing the exercise, see the Lab setup section later in this module for more information about setting up a development environment in Visual Studio Code.

In this exercise, you'll install and implement a type library called [dotenv](https://www.npmjs.com/package/dotenv). This commonly used library loads environment variables from a **.env** file into `process.env`, enabling you to store configuration details in the environment separate from your code and access them.

1. Open a new workspace in Visual Studio Code.
1. Add a new file called **Main.ts**.
1. From the terminal, generate a new **tsconfig.json** file with default configuration settings.

    ```bash
    tsc --init
    ```

1. Go to [DefinitelyTyped](https://definitelytyped.org/) and search for the **dotenv** type library. DefinitelyTyped will provide the name of the library to install and other implementation details.
1. From the terminal, use `npm` to install the **dotenv** type library in your project folder.

    ```bash
    npm install dotenv
    ```

1. The **dotenv** type definition also requires you to install the **node** type definition. **node** provides access to `process.env` so you can access it from your code.

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

1. Assign `dotenv.config()` to a variable. `config` reads your **.env** file, parses the contents, assigns it to `process.env`, and returns an object with a `parsed` key containing the loaded content or an `error` key if it failed.

    ```typescript
    const result = dotenv.config();
    ```

1. TypeScript can now provide Intellisense and type checking for the `config` object. If you type `result.`, you see that `result` has two properties: `error` and `parsed`. Add an error checking statement to verify that the `config` operation worked as expect.

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

This exercise provides a simple example of using **dotenv**. See [dotenv](https://www.npmjs.com/package/dotenv) to learn more about using it in your code.

## Exercise solution

To see the solution to this exercise, clone the repository by entering the following at the command prompt. [REPLACE THE URL PLACEHOLDER WITH A LINK TO \code\module-07\m07-exercise-end]

```bash
git clone <url>
cd <folder name>
code .
```

See the **Lab setup** section in the lab for more information about setting up your development environment to run the solution.
