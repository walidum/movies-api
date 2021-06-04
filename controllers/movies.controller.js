module.exports.HELLO = (req, res) => {
    res.send('Hello word !')
}

module.exports.SEND_DATA = (req, res) => {
    console.log(req.body)
    res.send('OK!')
}

module.exports.ADD_MOVIE = (req, res) => {

}
module.exports.ALL_MOVIES = (req, res) => {

}
module.exports.EDIT_MOVIE = (req, res) => {

}
module.exports.DELETE_MOVIE = (req, res) => {
    
}
