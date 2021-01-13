
// Returns the value of a parameter to the console. 
function returnGreeting (greeting: string) {
    console.log(`The message from namespace Greetings is ${greeting}.`);
}

// Returns the value of a parameter and the parameter length to the console.
function returnGreeting (greeting: string) {
    let greetingLength = getLength(greeting);
    console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
}
function getLength(message: string): number {
    return message.length
}
