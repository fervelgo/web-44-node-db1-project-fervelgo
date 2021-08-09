const express = require('express');
const { checkAccountId } = require('./accounts-middleware');
const Accounts = require('./accounts-model');

const router = require('express').Router()

router.get('/', (req, res, next) => {
  Accounts.get()
  .then(accounts => {
    res.json(accounts)
  })
  .catch(next)
})

router.get('/:id', checkAccountId, (req, res, next) => {
    res.json(req.project)
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
