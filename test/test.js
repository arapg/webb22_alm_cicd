const assert = require('assert');

const { Calculator } = require('../routes/calc');

/* eslint-disable no-undef */

describe('Dummy tests', () => {
  it('should always pass', () => {

  });
});

describe('Calculator', () => {
  it('should return 5 when 2 and 3 are added', () => {
    const calc = new Calculator();

    calc.add(2);
    calc.add(3);
    assert.equal(calc.getResult(), 5);
  });

  it('should return -1 when 3 is subtracted from 2', () => {
    const calc = new Calculator();

    calc.add(2);
    calc.subtract(3);
    assert.equal(calc.getResult(), -1);
  });
});
