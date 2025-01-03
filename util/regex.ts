import { ValidationResultProps } from "@/types";

function isBalancedParenthesis(string: string) {
  let parenthesisCount = 0;
  for (const char of string) {
    if (char === "(") {
      parenthesisCount++;
    } else if (char === ")") {
      if (parenthesisCount === 0) return false;
      parenthesisCount--;
    }
  }
  return parenthesisCount === 0;
}

export function isValidRegex(regex: string): ValidationResultProps {
  // FIX: THIS IS VERY WRONG, LETS USE DFA METHOD INSTEAD, WILL BE CREATING A DIAGRAM

  const result: ValidationResultProps = { isValid: true, error: [] };

  if (!isBalancedParenthesis(regex)) {
    result.isValid = false;
    result.error.push("Expression is not a balanced paranthesis!");
    return result;
  }

  // const ignoredCharacters = new RegExp("[a-z]\(\)\ ");
  //
  // for (let i = 0; i < regex.length; i++) {
  //   if (regex[i] === "*") {
  //     if (i === 0 || regex[i - 1] === "*" || regex[i - 2] === "+") {
  //       result.isValid = false;
  //       result.error.push("Invalid '*' was found!");
  //       break;
  //     }
  //
  //   } else if (regex[i] === '+') {
  //     if (i === 0 || regex[i - 1] === '')
  //   } else if (ignoredCharacters.test(regex[i])) {
  //     // ignore the character
  //   } else {
  //     // NOTE: Possibly useless catch (input will not accept invalid characters)
  //
  //     result.isValid = false;
  //     result.error.push("An invalid character was found!");
  //     break;
  //   }
  //   i++;
  // }

  return result;
}
