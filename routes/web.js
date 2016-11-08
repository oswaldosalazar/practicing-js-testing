const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  // canary test to get 200 working
  // res.json({message:'yay'});
  res.sendFile('index.html', {root: __dirname + '/../public'}, (err) => {
    if(err) return next(err)
  });
});

module.exports = router;
