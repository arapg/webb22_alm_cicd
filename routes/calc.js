const express = require('express');

const router = express.Router();

class Calculator {
  constructor() {
    this.calculatorResult = 0;
    this.hide = ['constructor', 'methods', 'result'];
  }

  methods() {
    return Object.getOwnPropertyNames(Calculator.prototype).filter(
      (method) => !this.hide.includes(method),
    );
  }

  multiply(factor) {
    this.calculatorResult *= factor;
  }

  subtract(value) {
    this.calculatorResult -= value;
  }

  divide(divisor) {
    this.calculatorResult /= divisor;
  }

  add(value) {
    this.calculatorResult += value;
  }

  getResult() {
    return this.calculatorResult;
  }
}
router.get('/', (req, res, next) => {
  res.send('Hello this is /calc');
});

router.get('/:method', (req, res, next) => {
  const calculate = new Calculator();
  const { method } = req.params;

  const val1 = parseInt(req.query.val[0], 10);
  const val2 = parseInt(req.query.val[1], 10);
  let result = '';

  switch (method) {
    case add:
      calculate.add(Number(val1));
      calculate.add(Number(val2));

      result = `Adding ${val1} and ${val2} gives the sum ${calculate.getResult()}`;
      break;
    
    case sub:
      calculate.add(Number(val1));
      calculate.subtract(Number(val2));

      result = `Subtracting ${val2} from ${val1} gives the difference ${calculate.getResult()}`;
      brea
  }

  res.send(result);
});

module.exports = { Calculator, router };
