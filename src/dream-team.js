const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let newArr = members.filter(member => typeof member === "string");
    let result = [];
    newArr.forEach(el => {
        let trimmedEl = el.trim();
        let letter = trimmedEl.slice(0, 1).toLowerCase();
        result.push(letter);
    });
    return result.sort().join("").toUpperCase();

};