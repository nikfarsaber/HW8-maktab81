/*
Question 1:
1. write a function which returns a function. the returned function should add property to a specific object.
example:
const uesr = {}
const nameSetter = setterGenerator(‘name’)
nameSetter(‘Jack’) console.log(uesr) // {name: ‘jack’}
*/
function setterGenerator(inputProperty) {
  return function (value) {
    this[inputProperty] = value;
  };
}
//check answer
//const user = {};
// const nameSetter = setterGenerator("name");
// nameSetter.call(user, "jack");
// console.log(user);

//
//
/*
Question2:
2. write a function which takes an element type and a callback function.
the function should create the corresponding element, append it to dom (wherever) then pass the reference to callback
example:
const callback = function(elem ){
elem.style.backgroundColor = ‘red’ }
elemCreator(‘div’ , callback)
*/
function elemCreator(element, callBackFunction) {
  const newElement = document.createElement(element);
  newElement.style.width = "100px";
  newElement.style.height = "100px";
  document.body.appendChild(newElement);
  callBackFunction(newElement);
}

function callback(elem) {
  elem.style.backgroundColor = "red";
}
// check answer
// elemCreator("div", callback);

//
//
/*
Question3
3. write a function which uses closure scope to cout up a variable. warning: you should not declare any variable except counter in global scope example:
const counter = counterMaker()
console.log( counter() ) // 0
console.log( counter() ) // 0
console.log( counter(1) ) // 1
console.log( counter() ) // 1
console.log( counter(3) ) // 4
console.log( counter(7) ) // 11
console.log( counter(-5) ) // 6
*/

/*
Question4
4. write a paragraph about iife. Why should we use iife?
An Immediate-Invoked Function Expression (IIFE) is a function that is executed instantly after it's defined. This pattern has been used to alias global variables, make variables and functions private and to ensure asynchronous code in loops are executed correctly.

While popular, we have seen how changes in ES6 can eliminate the need to use IIFEs in modern JavaScript. However, mastering this pattern also gives us a deeper understanding of scope and closure, and will be especially useful in maintaining legacy JavaScript code.
*/

function counterMaker() {
  let counterValue;
  return function counterReturn(input = 0) {
    isNaN(+counterValue) ? (counterValue = 0) : (counterValue += input);
    return counterValue;
  };
}

// check answer
// const counter = counterMaker();
// console.log(counter());
// console.log(counter());
// console.log(counter(1));
// console.log(counter());
// console.log(counter(3));
// console.log(counter(7));
// console.log(counter(-5));
//
//
