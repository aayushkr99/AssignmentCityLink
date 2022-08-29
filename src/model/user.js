const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    id : {type : String, required : true, trim : true},
    fullName : {type : String, required : true, trim : true},
    mobile : {type : String, required : true, trim : true},
    email : {type : String, required : true, trim : true}

}, {timestamps : true})

module.exports = mongoose.model("customer" , customerSchema)