## quiz title: Check your knowledge
Choose the best response for each of the questions below. Then select **Check your answers**.

### Multiple Choice

The `boolean`, `number`, `string`, and `enum` types are examples of which category of subtype of `any`?

(x)Primitive types.{{The `boolean`, `number`, `string`, and `enum` types are examples of the primitive subtype of the `any` type.}}

()Type parameters.{{Type parameters are their own subtype under the `any` type.}}

()Object types.{{Object types are their own subtype under `any` and include classes, interfaces, arrays, and literal types.}}

### Multiple Choice

Which of the following types is an example of an object type?

()`void`.{{`void` is an example of a primitive type.}}

(x)`Array`.{{`Array` is an example of an object type.}}

()Type parameters.{{Type parameters are their own subtype under the `any` type.}}

### Multiple Choice

What is the primary difference between the `any` and `unknown` types?

()You can assign any value to `unknown`, but the `any` type has some constraints.{{There are no constraints when using the `any` type.}}

(x)You can access the properties of an `any` type but not an `unknown` type.{{You can access any properties, as well as call or construct them, when using the `any` type.}}

()You can access the properties of an `unknown` type but not an `any` type.{{You can't access any properties, or call or construct them, when using the `unknown` type.}}

### Multiple Choice

What is the name of the feature in TypeScript that tells the compiler "I know what Im doing?"

(x)Type assertion.{{A type assertion tells TypeScript that you have performed any special checks that you need before calling the statement.}}

()Literal narrowing.{{Literal narrowing is process of going from an infinite number of potential cases to a smaller, finite number of potential cases.}}

()Type guard.{{A type guard examines the type of an expression at runtime.}}

### Multiple Choice

What is a Tuple?

()An array with an infinite number of elements of the same type.{{The is the definition of a standard array.}}

()An array with specific number of elements of the same type.{{While a Tuple might contain elements of the same type, this is not required. All elements can be a different type.}}

(x)An array with a specific number of elements of one or more types.{{A Tuple is an array that has a specific number of elements. Each element is of a specific type and must appear in the exact same order when values are assigned to it.}}
