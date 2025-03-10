const isPalindrome = require('../src/palindrome');

// test('-10 + 7 = -3', () => {
//     expect(addition(-10, 7)).toBe(-3)
// })

// test.each([[3, 4, 7], [5, -10, -5]])(
//     'a + b = c', (a, b, expected) => {
//         expect(addition(a, b)).toBe(expected);
//     }
// );

test.each([
    ['racecar', true],
    ['hello', false],
    ['A man, a plan, a canal, Panama', true]
  ])('%s should be a palindrome: %s', (input, expected) => {
    expect(isPalindrome(input)).toBe(expected);
  });
  

// test('racecar is a palindrome', () => {
//     expect(isPalindrome('racecar')).toBe(true);
// });

// test('hello is not a palindrome', () => {
//     expect(isPalindrome('hello')).toBe(false);
// });

// test('A man, a plan, a canal, Panama is a palindrome', () => {
//     expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
// });