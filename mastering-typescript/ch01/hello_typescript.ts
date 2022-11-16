console.log(`hello TypeScript`);

//The use of the backtick ( ` ) to delineate strings gives us the ability to inject values directly into the string, as follows:
var version = `es6`;
console.log(`hello ${version} TypeScript`);

//Concepts of typescript
//1*Strong typing, or static typing as it is also known, means that when we create a variable, or define a parameter in a function, we specify what type it is. Once this type has been specified, we cannot change it
var myString: string = `this is a string`;
//myString = 1;
//The above would throw this error
//error TS2322: Type '1' is not assignable to type 'string'.myString = 1;

myString='i am bola'
//the above is correct

function calculate(a: number, b: number, c: number): number {
    return (a * b) + c;
}
console.log(`calculate() = ${calculate(3, 2, 1)}`);
//var returnedValue: string = calculate(3, 2, 1);
//the above would throw an error

//Basic types
var myBoolean : boolean = true;
var myNumber : number = 1234;
var myStringArray : string[] = [`first`, `second`, `third`];

//myBoolean = myNumber;
//myStringArray = myNumber;
//myNumber = myStringArray[0];
//the above is invalid and would throw an error

myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), `5678`];
myNumber = myStringArray.length;
console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);

//2*Inferred typing or type inference This means that even if we do not explicitly specify the type of a variable, the compiler will determine its type based on when it was first assigned. 
//Again, once the variable has a type, normal type comparisons will be used.
var inferredString = "this is a string";
var inferredNumber = 1;
//inferredNumber = inferredString;
// the above throw an error cause inferredString was first declared as a string and cannot be reassigned


//3*Duck typing  Duck typing suggests that "if it looks like a duck, and quacks like a duck, then it probably is a duck." In other words, two variables are considered to have the same type 
//if they have the same properties and methods. 
var nameIdObject = { name: "myName", id: 1, print() { } };
nameIdObject = { id: 2, name: "anotherName", print() { } };
//nameIdObject = { id: 3, name: "thirdName" };
//the above would fail with error error TS2741: Property 'print' is missing in type '{ id: number; name: string; }' but required in type '{ name: string; id: number; print(): void; }'.

var obj1 = { id: 1, print() { } };
var obj2 = { id: 2, print() { }, select() { } }
obj1 = obj2;
//obj2 = obj1;
//the above would throw an error cause obj1 does not have all the properties obj2 has

//Function signatures and void is meant for functions that doesnt return a value
function printString(a: string) : void {
    console.log(a);
}
//var returnedValue : string = printString("this is a string");
//the above would throw an error cause printString not assigned to a type string


