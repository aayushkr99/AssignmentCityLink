const {isValid, isValidEmail,isValidNumber, isValidPhone, isValidPostalCode, isValidRequestBody, isValidString, numberInString} = require('./function')




const validateBody = async function (req, res, next) {
  const {
    context,
    type,
    bookingId,
    sources,
    status,
    customer,
    source,
    destination,
    vendor,
    bookingTime,
    pickupTime,
  } = req.body;

  if(!isValidRequestBody(req.body)) return res.status(400).send({status : false, message : "request payLoad should not be empty"})

  if(!isValid(context)) return res.status(400).send({status : false, message : "context should be present"})
  if(!isValidString(context)) return res.status(400).send({status : false, message : "context should contains alphabets only"})

  if(!isValid(type)) return res.status(400).send({status : false, message : "type should be present"})
  if(!isValidString(type)) return res.status(400).send({status : false, message : "type should contains alphabets only"})

  if(!isValid(bookingId)) return res.status(400).send({status : false, message : "bookingId is required"}) 
  if(!numberInString(bookingId)) return res.status(400).send({status : false, message : "bookingId should contains only 5 digits number in string type"}) 

  if(!isValid(sources)) return res.status(400).send({status : false, message : "sources is required"})

  if(!isValid(status)) return res.status(400).send({status : false, message : "status is required"})

////////////////////////////////////////////////////////////CUSTOMER VALIDATION///////////////////////////////////////////////////////////////////////////////////


  if(!isValid(customer)) return res.status(400).send({status : false, message : "customer is required"})
    if(!isValid(customer.id)) return res.status(400).send({status : false, message : "customer id is required"})
    if(!isValidNumber(customer.id)) return res.status(400).send({status : false, message : "customer id should be in number type"})
    if(!isValid(customer.fullName)) return res.status(400).send({status : false, message : "customer fullName is required"})
    if(!isValidString(customer.fullName)) return res.status(400).send({status : false, message : "customer fullName should contains alphabets only"})
    if(!isValid(customer.mobile)) return res.status(400).send({status : false, message : "customer mobile is required"})
    if(!isValidPhone(customer.mobile)) return res.status(400).send({status : false, message : "please give valid phone number"})
    if(!isValid(customer.email)) return res.status(400).send({status : false, message : "customer email is required"})
    if(!isValidEmail(customer.email)) return res.status(400).send({status : false, message : "customer email is not valid"})
   

/////////////////////////////////////////////////SOURCE VALIDATION////////////////////////////////////////////////////////////////////////////////////////////////    


  if(!isValid(source)) return res.status(400).send({status : false, message : "source is required"})

   if(!isValid(source.name)) return res.status(400).send({status : false, message : "source name is required"}) 

   if(!isValidString(source.name)) return res.status(400).send({status : false, message : "source name should contains alphabets only"})

   if(!isValid(source.address)) return res.status(400).send({status : false, message : "source address is required"})

     if(!isValid(source.address.address)) return res.status(400).send({status : false, message : "source address key is required"})

     if(!isValid(source.address.location)) return res.status(400).send({status : false, message : "source address location is required"})

     if(!isValidString(source.address.location)) return res.status(400).send({status : false, message : "source location should contains alphabets only"})

     if(!isValid(source.address.city)) return res.status(400).send({status : false, message : "source address city is required"})

     if(!isValidString(source.address.city)) return res.status(400).send({status : false, message : "source city should contains alphabets only"})

     if(!isValid(source.address.state)) return res.status(400).send({status : false, message : "source address state is required"})

     if(!isValidString(source.address.state)) return res.status(400).send({status : false, message : "source state should contains alphabets only"})

     if(!isValid(source.address.postalCode)) return res.status(400).send({status : false, message : "source address postalCode is required"})

     if(!isValidPostalCode(source.address.postalCode)) return res.status(400).send({status : false, message : "source Postal code should be of 6 digits"})
     
     if(!isValid(source.address.country)) return res.status(400).send({status : false, message : "source address country is required"})

     if(!isValidString(source.address.country)) return res.status(400).send({status : false, message : "source address country should contains alphabets only"})
    
   if(!isValid(source.latitude)) return res.status(400).send({status : false, message : "source latitute is required"})
   if(typeof source.latitude !== 'string') return res.status(400).send({status : false, message : "source latitude should be in string"})
   
  // if(!latRegex.test(source.latitude)) return res.status(400).send({status : false , message : "valid source latitute should be present"})

   if(!isValid(source.longitude)) return res.status(400).send({status : false, message : "source longitute is required"})
   if(typeof source.longitude !== 'string') return res.status(400).send({status : false, message : "source longitude should be in string"})
   
   //if(!lngRegex.test(source.longitude)) return res.status(400).send({status : false , message : "valid source longitute should be present"})




   ///////////////////////////////////////////DESTINATION VALIDATION /////////////////////////////////////////////////////////////////////////////////////////////////////////

  if(!isValid(destination)) return res.status(400).send({status : false, message : "destination is required"})

  if(!isValid(destination.name)) return res.status(400).send({status : false, message : "destination name is required"})

  if(!isValidString(destination.name)) return res.status(400).send({status : false, message : "destination name should contains alphabets only"})

  if(!isValid(destination.address)) return res.status(400).send({status : false, message : "destination address is required"})

    if(!isValid(destination.address.address)) return res.status(400).send({status : false, message : "destination address key is required"})

    if(!isValid(destination.address.location)) return res.status(400).send({status : false, message : "destination address location is required"})

    if(!isValidString(destination.address.location)) return res.status(400).send({status : false, message : "destination address location should contains alphabets only"})

    if(!isValid(destination.address.city)) return res.status(400).send({status : false, message : "destination address city is required"})

    if(!isValidString(destination.address.city)) return res.status(400).send({status : false, message : "destination address city should contains alphabets only"})

    if(!isValid(destination.address.state)) return res.status(400).send({status : false, message : "destination address state is required"})

    if(!isValidString(destination.address.state)) return res.status(400).send({status : false, message : "destination address state should contains alphabets only"})

    if(!isValid(destination.address.postalCode)) return res.status(400).send({status : false, message : "destination address postalCode is required"})

    if(!isValidPostalCode(destination.address.postalCode)) return res.status(400).send({status : false, message : "destination Postal code should be of 6 digits"})

    if(!isValid(destination.address.country)) return res.status(400).send({status : false, message : "destination address country is required"})

    if(!isValidString(destination.address.country)) return res.status(400).send({status : false, message : "destination address country should contains alphabets only"})


    if(!isValid(destination.address.coordinates)) return res.status(400).send({status : false, message : "destination address coordinates country is required"})

     if(!isValid(destination.address.coordinates.latitude)) return res.status(400).send({status : false, message : "destination address coordinates latitute  is required"})
     if(typeof destination.address.coordinates.latitude !== 'string') return res.status(400).send({status : false, message : "destination latitude should be in string"})
    // if(!latRegex.test(destination.address.coordinates.latitude)) return res.status(400).send({status : false , message : "valid destination latitute is required"})
     if(!isValid(destination.address.coordinates.longitude)) return res.status(400).send({status : false, message : "destination address coordinates longitute is required"})
    //  if(typeof destination.address.coordinates.longitute !== 'string') return res.status(400).send({status : false, message : "destination longitute should be in string"})
    // if(!lngRegex.test(destination.address.coordinates.longitude)) return res.status(400).send({status : false , message : "valid destination longitute should be present"})

////////////////////////////////////////////////////////VENDOR VALIDATION ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if(!isValid(vendor)) return res.status(400).send({status : false, message : "vendor should be present"})
   if(!isValid(vendor.id)) return res.status(400).send({status : false, message : "vendor id should be present"})
   if(!isValidNumber(vendor.id)) return res.status(400).send({status : false, message : "vendor id should be in number type"})
   if(!isValid(vendor.fullName)) return res.status(400).send({status : false, message : "vendor fullName is required"})
   if(!isValidString(vendor.fullName)) return res.status(400).send({status : false, message : "Vendor fullName should contains alphabets only"})
   if(!isValid(vendor.vehicleNumber)) return res.status(400).send({status : false, message : "vendor vehicle number should be present"})
   if(!isValid(vendor.vehicleModel)) return res.status(400).send({status : false, message : "vendor vehicle MOdel should be present"})


  if(!isValid(bookingTime)) return res.status(400).send({status : false, message : "bookingTime is required"})

  if(!isValid(pickupTime)) return res.status(400).send({status : false, message : "pickupTime is required"})

  next();

};

module.exports = { validateBody };
