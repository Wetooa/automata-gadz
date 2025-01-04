import { Alphabet, TransitionTable, ValidationResult } from "@/types";
import { isValidTextWithTransitionTable } from "./dfa";

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

type RegexStates = "q0" | "q1" | "q2" | "q3";
type BasicAlphabet = "a" | "b" | "c" | "d";
type RegexAlphabet = BasicAlphabet | "*" | "+" | "(" | ")";

// FIX: Better if we have something like this
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ValidRegexString<S extends string> = S extends `${Alphabet}${infer Rest}`
  ? Rest extends ""
    ? S
    : ValidRegexString<Rest>
  : never;

export const RegexTransitionTable: TransitionTable<RegexStates, RegexAlphabet> =
  {
    startState: "q0",
    endStates: ["q0", "q1"],
    transitionTable: {
      q0: {
        a: "q0",
        b: "q0",
        c: "q0",
        d: "q0",
        "*": "q1",
        "+": "q2",
        "(": "q0",
        ")": "q0",
      },
      q1: {
        a: "q0",
        b: "q0",
        c: "q0",
        d: "q0",
        "*": "q3",
        "+": "q1",
        "(": "q0",
        ")": "q0",
      },
      q2: {
        a: "q0",
        b: "q0",
        c: "q0",
        d: "q0",
        "*": "q1",
        "+": "q3",
        "(": "q0",
        ")": "q3",
      },
      q3: {
        a: "q3",
        b: "q3",
        c: "q3",
        d: "q3",
        "*": "q3",
        "+": "q3",
        "(": "q3",
        ")": "q3",
      },
    },
  };

export function isValidRegex(regex: string): ValidationResult {
  const result: ValidationResult = { isValid: true, error: [] };

  if (!isBalancedParenthesis(regex)) {
    result.isValid = false;
    result.error.push("Unbalanced parenthesis detected!");
  }

  if (!isValidTextWithTransitionTable(regex, RegexTransitionTable)) {
    result.isValid = false;
    result.error.push("Invalid regular expression!");
  }

  return result;
}
