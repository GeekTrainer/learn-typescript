Classes enable you to express common object-oriented patterns in a standard way, making features like inheritance more readable and interoperable. In TypeScript, classes are yet are another way to define the shape of an object, in addition to describing object types with interfaces and functions.

If you haven't worked with classes, it may be helpful to review a few basic concepts.

You can think of a class as a blueprint for building objects, like a car. A `Car` class describes the attributes of a car, for example, the make, color, or number of doors. It also describes behaviors that the car can perform, like accelerating, braking, or turning.

But the ```Car``` class is just a plan for building the car. You must build an instance of Car from the Car class before it becomes an object that you can assign property values to (like setting the color to blue) or call its behaviors (like applying the brakes.)

The `````Car````` class can be reused to create any number of new Car objects, each with their own characteristics. You can also extend the Car class. For example, an `ElectricCar` class might extend Car. It will have all the same attributes and behaviors of Car but can also have its own unique attributes and behaviors, like range and charge.

![The Car class includes the properties make, color and, doors and the methods accelerate, brake, and turn. When the ElectricCar class extends Car, it includes all of the properties and methods of Car, plus a new property called range and a new method called charge.](../media/m05_car_class.jpg)


A class **encapsulates** data for the object. Data and behavior are included in the class but the details of both can be hidden from the person who is working with the object in code. For example, if you call the `Turn` method of a `Car` object, you don't need to know exactly how the steering wheel works, you just need to know that the car will turn left when you tell it to. The class serves as a black box where all the attributes and behaviors are only exposed through the properties and methods, limiting what a coder can do with it.

TIP If you want to dig into object-oriented programming concepts in more detail, see the [Fundamentals of Classes](https://channel9.msdn.com/series/software-development-fundamentals/03/) video.

