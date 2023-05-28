const assert = require('assert');

const { Calculator } = require('../../routes/calc');

describe('Calculator', function () {
  it('should return 5 when 2 and 3 are added', function () {
    const calc = new Calculator();

    calc.add(2);
    calc.add(3);
    assert.equal(calc.getResult(), 5);
  });
});
