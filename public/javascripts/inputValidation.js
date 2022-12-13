// check if the client sent a valid month input
const isMonthValid = monthInput => {
    let isMonthValid = true;
    // parse month input from type string to type number
    const month = Number(monthInput);
    // if month input is not integer or not in the range of 1-2 then it's not valid
    if(!Number.isInteger(month) || month < 1 || month > 12) {
        isMonthValid = false;
    }
    return isMonthValid;
}
// check if the client sent a valid year input
const isYearValid = yearInput => {
    let isYearValid = true;
    //parse year input from type string to type number
    const year = Number(yearInput);
    // if year input is not integer or smaller than 1 than it is not valid
    if(!Number.isInteger(year) || year < 1) {
        isYearValid = false;
    }
    return isYearValid;
}
// check if the client sent a valid sum input
const isSumValid = sumInput => {
    let isSumValid = true;
    // if sum input is not a number or a negative number then it is not valid
    if(isNaN(sumInput) || sumInput < 0) {
        isSumValid = false;
    }
    return isSumValid;
}
// check if the client sent a valid user id
const isUserIDValid = idInput => {
    let isUserIDValid = true;
    // parse user id input from type string to type number
    const id = Number(idInput);
    // if user id input is not integer or smaller than 1 then it is not valid
    if(!Number.isInteger(id) || id < 1){
        isUserIDValid = false;
    }
    return isUserIDValid;
}

module.exports = { isMonthValid, isYearValid, isSumValid, isUserIDValid };
