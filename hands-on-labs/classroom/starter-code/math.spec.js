const math = require('./math.js');

describe('Mathematical operations', function() {
  it('can add two numbers', function() {
    expect(math.add(1, 2)).toBe(3);
  });

  it('can subtract two numbers', function() {
    expect(math.sub(4, 2)).toBe(2);
  });

  it('can add numbers', function() {
    expect(math.sumOfPositiveNumbers(5)).toBe(1 + 2 + 3 + 4 + 5);
  });
});
