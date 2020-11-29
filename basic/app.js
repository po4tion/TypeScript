var userInput;
var userName;
// userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(msg, code) {
    throw { msg: msg, errorCode: code };
}
generateError('An error occurred!', 500);
