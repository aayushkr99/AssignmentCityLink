const mongoose = require('mongoose') 

const vendorSchema = new mongoose.Schema({
    id : {type : Number, required : true, trim : true},
    fullName : {type : String, required : true, trim : true},
    vehicleNumber : {type : String, required : true, trim : true},
    vehicleModel : {type : String, required : true, trim : true}

}, {timestamps : true})

module.exports = mongoose.model("vendor" , vendorSchema)
