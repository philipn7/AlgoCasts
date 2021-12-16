// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((result, char) => char + result, '');
}

// function reverse(str) {
//   const arr = str.split('');
//   let result = '';
//   for (const c of arr) {
//     result = c + result;
//   }
//   return result;
// }

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

module.exports = reverse;
