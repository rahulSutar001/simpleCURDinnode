const mongoose = require('mongoose')
const schema = mongoose.Schema

const user = new schema({
    name:{type:String, require},
    age:{type:Number, require},
    mob:{type:String, require}
},{timestamps:true})

module.exports = mongoose.model('User', user);