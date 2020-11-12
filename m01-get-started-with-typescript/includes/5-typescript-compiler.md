# The TypeScript compiler #

As you learned earlier, TypeScript is a strict superset of [ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/) (ECMAScript 6 or ES6). This means that all JavaScript code is also TypeScript code, and a TypeScript program can seamlessly consume JavaScript. In fact, you can convert a JavaScript file to a TypeScript file by simply renaming the extension from `.js` to `.ts`.

However, not all TypeScript code is JavaScript code. This is because TypeScript adds new syntax to JavaScript that makes it easier to read and implements some features, like static typing. While this TypeScript code makes development easier and less error prone, not all browsers can understand it. For this reason, TypeScript requires a build step ([transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler)) to transform it to JavaScript for your application to work.

TypeScript code is transformed into JavaScript code using the TypeScript compiler (or a TypeScript-compatible transpiler, like [Babel](https://babeljs.io/), [swc](https://swc.rs/docs/installation/), or [Sucrase](https://github.com/alangpierce/sucrase).) This process removes the TypeScript-specific code (for example, type declarations and interfaces) and generates a clean JavaScript file that you can run from your web pages and is compatible with browsers.

### Compiling a TypeScript file

You run the TypeScript compiler from the command line using the `tsc` command. For example, to compile a TypeScript file named `utility_functions.ts`, enter `tsc utility_functions.ts`. (Note that the .ts extension is optional.)

If there are no compiler errors, the `tsc` command generates a JavaScript file named `utility_functions.js`.

If the compiler finds errors in the code, it will display them in the command window. Fix the errors in the TypeScript file and rerun the `tsc` command.

### Compiler options

There are many compiler options that you can use with the tsc command to control the compilation to your preference. Some common options are:
* '--noImplicitAny' - This option instructs the compiler to raise errors on expressions and declarations with an implied 'any' type. For example: `tsc utility_functions.ts --noImplicitAny'
* '--target "ES5"' - This option specifies the ECMAScript target version for the JavaScript file. This example compiles an ECMAScript 5-compliant JavaScript file: 'tsc utlity_functions.ts --target "ES5"'

You'll learn about other compiler options in later modules. See [tscCLI Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for the complete list of options.

