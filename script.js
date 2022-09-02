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
