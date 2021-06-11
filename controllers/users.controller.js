const User = require('../shemas/user')
module.exports.REGISTER = (req, res) => {
    const user = new User(req.body)
    user.save()
        .then(ok => {
            res.send('OK')
        })
        .catch(err => {
            res.send('ERR')
        })
}
module.exports.ALLUSERS = (req, res) => {
    User.find()
        .then(u => {
            res.send(u)
        })
        .catch(err => {
            res.send('ERR')
        })

}
