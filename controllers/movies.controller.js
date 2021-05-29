
module.exports.HELLO = (req,res)=>{
  res.send('Hello word !')
}

module.exports.SEND_DATA = (req,res)=>{
    console.log(req.body)
}
