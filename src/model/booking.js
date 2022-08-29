const mongoose = require('mongoose')  

const bookingSchema = new mongoose.Schema({

    source : {
        name : {type : String , required : true, trim : true},
        address : {
            address : {type : String , required  : true ,trim : true},
            location : {type : String, required : true ,trim : true},
            city : {type : String , required : true ,trim : true},
            state : {type : String , required  :true ,trim : true},
            postalCode : {type : String ,required : true ,trim : true},
            country : {type : String, required : true ,trim : true}
        },
        latitude : {type : String , required : true ,trim : true},
        longitude : {type : String , required : true ,trim : true}
    },
    destination : {
        name : {type : String , required : true ,trim : true},
        address : {
            address : {type : String , required  : true ,trim : true},
            location : {type : String, required : true ,trim : true},
            city : {type : String , required : true ,trim : true},
            state : {type : String , required  :true ,trim : true},
            postalCode : {type : String ,required : true ,trim : true},
            country : {type : String, required : true ,trim : true},
            coordinates : {
                latitude : {type : String , required : true ,trim : true},
                longitude : {type : String , required : true ,trim : true}
            }
        },
    },
  
}, {timestamps : true})

module.exports = mongoose.model("booking" , bookingSchema)
