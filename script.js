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
