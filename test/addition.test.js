const {addition} = require('./addition');



test.each([[3, 4, 7], [5, -10, -5]])(
    'a + b = c', (a, b, expected) => {
        expect(addition(a, b)).toBe(expected);
    }
);

test('2 + 3 = 5', () => {
    expect(addition(2, 3)).toBe(5)
})





test.skip('-10 + 7 = -3', () => {
    expect(addition(-10, 7)).toBe(-3)
})