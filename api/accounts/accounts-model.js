const db = require('../../data/db-config')

const getAll = () => {
  return db('budget')
}

const getById = id => {
  return db('budget').where(({ id: id}))
}

const create = account => {
  
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
