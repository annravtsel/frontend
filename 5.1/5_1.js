var myString = 'This is string';
var Spaces = '  More      spaces';

function last(string) {
  return string.slice(-1);
}
console.log(last(myString));

function withoutLast(string) {
  return string.slice(0, -1);
}
console.log(withoutLast(myString));

function reverseString(string) {
  return string.split('').reverse().join('');
}
console.log(reverseString(myString));

function withoutSpaces(string) {
  return string.trim().replace(/\s+/g, ' ');
}
console.log(withoutSpaces(Spaces));