const Account = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

function checkAccountId = (req, res, next) => {
 try {
   const account = Account.get(req.params.id)
   if(!account) {
     res.status(404).json({ message: "No account with that ID Mr."})
   } else {
     req.account = account
     next()
   }
 } catch (err) {
   res.status(500).json({ message: "Could not find an account under that ID Mr" })
 }
}

module.exports = {
  checkAccountId
}