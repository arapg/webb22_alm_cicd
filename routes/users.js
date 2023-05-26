const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json('APG, FG, ZZ, JB');
});

module.exports = router;
