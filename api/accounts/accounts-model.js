const db = require('../../data/db-config')

const getAll = () => {
  return db('budget')
}

const getById = id => {
  return db('budget').where(({ id: id}))
}

const create = account => {
  return db('budget').insert(account)
}

const updateById = (id, account) => {
  return db('budget').update({id: id, account: account})
}

const deleteById = id => {
  return db('budget')
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
