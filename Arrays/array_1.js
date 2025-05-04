const myArray = [1, 2, 3, 4, 5];

//insert at a certain index
myArray = unshift(0, 0); //insert 0 at index 0

//random funtion
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(toCelsius(98.6));

//extend
const ext = [6, 7, 8, 9];
myArray.concat(ext); // [1,2,3,4,5,6,7,8,9]
