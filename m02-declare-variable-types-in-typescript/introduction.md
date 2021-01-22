# Title

Declare variable types in TypeScript

## Role(s)

- student
- developer

## Level

- intermedia

## Product(s)

- TypeScript

## Prerequisites

- Familiarity with JavaScript
- Familiarity with declaring variables using `let` and `const` in JavaScript.
- Basic knowledge of TypeScript
- Installed software:
  - [Git](https://git-scm.com/)
  - [Visual Studio Code](https://code.visualstudio.com)
  - [Node.js](https://nodejs.org/)
  - TypeScript 

## Summary

JavaScript is a dynamically typed language. While this makes declaring variables easy, it can in some cases lead to unexpected results. The static type system in TypeScript enables you to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly. In TypeScript, declarations of namespaces, classes, properties, functions, variables, and other language entities associate types with those entities. The way that a type is formed and associated with a language entity depends on the kind of entity.

This module introduces some of the available types and shows how to associate them with variables. Later modules examine how interfaces, functions, and classes use static typing.

## Learning objectives

1. Explain the advantages of declaring typed variables in TypeScript.
1. Declare variables using primitive types.
1. Declare variables using object types.
1. Declare variables using union and intersection types.

## Chunk your content into subtasks

Identify the subtasks of *module title*

| Subtask | What part of the introduction scenario does this subtask satisfy? | How will you assess it: **Exercise or Knowledge check**? | Which learning objective(s) does this help meet? | Does the subtask have enough learning content to justify an entire unit? If not, which other subtask will you combine it with? |
| ---- | ---- | ---- | ---- | ---- |
| Explain the advantages of declaring typed variables in TypeScript | Benfits of using a static type system | Exercise | Explain the advantages of declaring typed variables in TypeScript | Yes |
| Declare variables using primitive types | How to associate types with variables | Exercise | Declare variables using primitive types | Yes |
| Declare variables using object types | How to associate types with variables | Exercise | Declare variables using object types | Yes |
| Declare variables using union and intersection types | How to associate types with variables | Exercise | Declare variables using union and intersection types | Yes |

## Outline the units

1. **Introduction**

    Static typing is a fundamental benefit of using TypeScript over JavaScript for development. Once you understand the differnt types, you can apply them throughout your code, in variables, interfaces, functions, and classes, and achieve the benefits of type checking and Intellisense. 

1. **Overview of types**

    - Explain the difference between let and const variables
    - Explain how type inference works in TypeScript
    - Identify the type categories
        - Any
        - Primative types
        - Object types and type parameters

    **Knowledge check**

    - Multiple choice

1. **Primitive types**

    - Apply primitive types to variables
      - Boolean type
      - Number and BigInteger types
      - String type
      - Void, null, and undefined types
      - Enum type

    **Knowledge check**

    - Multiple choice

1. **Exercise: Enums**

    1. Identify uses for enums
    1. Define an enum type

1. **Any and unknown types**

    - Apply the any type to a variable
    - Explain the difference between the any type and the unknown type
    - Explain how type assertion works
    - Determine the type of a variable using a type guard

    **Knowledge check**

    - Multiple choice

1. **Union and intersection types**

    - Describe a value that can be one of several types using a union type
    - Combine two or more types using an intersection type
    - Define a literal type
      - Literal narrowing

    **Knowledge check**

    - Multiple choice

1. **Collection types**

    - Define an array type
    - Define a tuple type

    **Knowledge check**

    - Multiple choice

1. **Lab**

    1. Exercise 1: Modify existing JavaScript code to have strongly typed variables
    1. Exercise 2: Modify existing JavaScript code that ensures operational outcomes using strongly typed variables
    1. Exercise 3: Implement an enum type
    1. Exercise 4: Declare an array type

1. **Summary**

    Using strongly typed variables in TypeScript enables it to validate that your code is working correctly and provides you with a better way to document the intention of your code. Now that you know which types are available, you can apply them to interfaces, functions, and classes.

## Notes

- Go to [TypeScript Handbook: Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html) to learn more about the primitive types and the array type.
- Go to [TypeScript Handbook: Enums](https://www.typescriptlang.org/docs/handbook/enums.html) to learn more about enumeration types.
- Go to [TypeScript Handbook Reference: Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html) to learn more about type guards.
- Go to [TypeScript Handbook: Literal Types](https://www.typescriptlang.org/docs/handbook/literal-types.html) to learn more about literal types.
- Go to [TypeScript Handbook: Unions and Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html) to learn more about these advanced types.
