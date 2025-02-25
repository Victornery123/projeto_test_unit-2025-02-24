const math = require ('../math')

test('multiply 6 * 3 igual a 18', () =>{
    expect(math.multiply(6, 3)).toBe(18)
});

test('subtract 6 - 3 igual a 3', () =>{
    expect(math.subtract(6, 3)).toBe(3)
});

test('add 6 + 3 igual a 9', () =>{
    expect(math.add(6, 3)).toBe(9)
});

test('divide 6 / 3 igual a 18', () =>{
    expect(math.divide(6, 3)).toBe(2)
});
