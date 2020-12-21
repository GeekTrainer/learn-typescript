
Choose the best response for each of the questions below. Then select **Check your answers**.
## quiz title: Check your knowledge

## Multiple Choice

When using generics, you can limit the range of types that a type variable can accept. What is this called?

()Type limiting.{{While it is limiting the types, this is not the term used to describe it.}}

()Generic limits.{{While it is limiting the types, this is not the term used to describe it.}}

(x)A generic constraint.{{A generic constraint limits the types that a type variable can accept, rather than accepting any possible type.}}

## Multiple Choice

What is the best type of operation to use with a generic?

()Any operation is compatible with a generic.{{Not all operations can be performed on any type of data, which limits which operations you can use with a generic.}}

()Mathematical operations.{{Most mathematical operations cannot be performed on any type of data, which limits which operations you can use with a generic.}}

(x)Operations that can be performed on a variety of data.{{Because any type is possible, TypeScript raises errors to prevent certain operations that are not supported by all types. For this reason, it's best to use generics with operations that can work on a variety of data.}}

## Multiple Choice

What's the difference between using a generic and the `any` type.

()The `any` type is very flexible so it is preferred over generics in most cases.{{While the any type is indeed flexible, you won't have the type checking that generics provide.}}

()There is no difference between using a generic and using the `any` type.{{There are some key differences between using a generic and using the any type.}}

(x)Using a generic provides type checking while using the `any` type does not.{{Type checking is a key difference between generics and the any type.}}
