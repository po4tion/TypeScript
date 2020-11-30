"use strict";
let userInput;
let userName;
// userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(msg, code) {
    throw { msg: msg, errorCode: code };
}
generateError('An error occurred!', 500);
//# sourceMappingURL=app.js.map