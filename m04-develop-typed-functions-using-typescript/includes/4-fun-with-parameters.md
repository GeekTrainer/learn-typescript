The TypeScript compiler assumes, by default, that all parameters defined in a function are required. When a function is called, the TypeScript compiler verifies:

- A value as been provided for each parameter.
- Only parameters that the function requires are passed to it.

This is different from JavaScript, which assumes that all parameters are optional and allows you to pass more (or fewer) arguments to the function than are defined by it.

## Required parameters

All function parameters are required, unless otherwise specified, and the number of arguments passed to a function must match the number of required parameters the function expects.

## Optional parameters

You can also define optional parameters by appending a question mark (?) to the end of the parameter name.

## Default parameters

You can also assign default values to optional parameters. If a value is passed as an argument to the optional parameter, that value will be assigned to it. Otherwise, the default value will be assigned to it. As with optional parameters, default parameters must come after required parameters in the parameter list.

## Rest Parameters

If you want to work with multiple parameters as a group (in an array) or don't know how many parameters a function will ultimately take, you can use rest parameters. Rest parameters are treated as a boundless number of optional parameters. You may leave them off or have as many as you want.
