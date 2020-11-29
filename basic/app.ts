let userInput: unknown;
let userName: string;

// userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(msg: string, code: number) {
  throw { msg: msg, errorCode: code };
}

generateError('An error occurred!', 500);