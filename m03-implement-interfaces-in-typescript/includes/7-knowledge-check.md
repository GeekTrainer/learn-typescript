
Choose the best response for each of the questions below. Then select **Check your answers**.

## Multiple Choice

What is the primary job of an interface?

()Define the implementation details for an object.{{A function or class that implements the interface are responsible for the implementation details.}}

()Fulfill the code contract for an object.{{A function or class that implements the interface are responsible for fulfilling the code contract for an object.}}

(x)Describe the properties and return types of an object.{{An interface describes the properties and return types, while a function or class define the implementation details.}}

## Multiple Choice

How can you prevent the type system from raising an error when a property in an interface is omitted?

()Make the property required.{{TypeScript will raise an error when a required property is omitted.}}

()Make the property read only.{{TypeScript will raise an error when a read only property is omitted, unless it is also optional.}}

(x)Make the property optional.{{Optional properties may be omitted without raising an error.}}

## Multiple Choice

What happens when you extend one interface with another interface?

(x)You must implement all the required properties from all interfaces.{{Any required properties in any of the interfaces must be implemented in the combined interface.}}

()Multiple interfaces can have the same property if the property has the exact same name.{{Multiple interfaces can have the same property if the property has the exact same name, but they must also be the same type.}}

()If two interfaces have a property with the same name but different types, TypeScript ignores the property completely.{{If the property has the same name but different type, you must declare a new property such that the resulting property is a subtype of both interfaces.}}
