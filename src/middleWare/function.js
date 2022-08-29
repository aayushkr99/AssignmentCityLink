const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
  };
  
  const isValidRequestBody = function (requestbody) {
    return Object.keys(requestbody).length > 0;
  };
  
  const isValidNumber = function (num) {
      if (typeof num != "number") return false;
      let a = (num % 10).toString().length;
      if (a > 1 || num < 0) {
        return false;
      } else return true;
    };
  
    const isValidString= function (value) {
      value = value.trim()
      const noNumber =/^[^0-9]+$/g                    
      if (typeof value !== 'string') return false
      if(noNumber.test(value) === false) return false
      return true
  }
  
  const numberInString = function(value) {
      if(!(/^[1-9][0-9]{4}$/.test(value.trim()))) {
          return false
      }
      return true
  }
  
  const isValidPostalCode = function(value) {
      if(!(/^[1-9][0-9]{5}$/.test(value.trim()))) {
          return false
      }
      return true
  }
  
  const isValidPhone =function (value){            
      const test2 = /^(\+91[\-\s]?)?[0]?(91)?[6-9]\d{9}$/  
      if (typeof value !== 'string') return false
      if(test2.test(value) === false) return false
      return true
  } 
  
  const isValidEmail =function (value){            
      const test1 = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/ 
      if (typeof value !== 'string') return false
      if(test1.test(value) === false) return false
      return true
  }  

  
  module.exports = {isValid, isValidEmail, isValidNumber, isValidPhone, isValidPostalCode , isValidRequestBody, isValidString, numberInString}