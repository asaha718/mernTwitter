const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTweetInput(data){ 
    let error= {}; 

    data.text= validText(data.text) ? data.text : ''; 

    if (!Validator.isLength(data.text, { min: 5, max: 140})){ 
        errors.text = 'Tweet must be btw 5 and 140 characters'; 
    }

    if (Validator.isEmpty(data.text)) { 
        errors.text = 'Tweet cant be empty'; 
    }

    return { 
        errors, 
        isValid: Object.keys(errors).length === 0
    }; 
}; 