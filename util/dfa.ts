import { State, Alphabet, TransitionTable } from "@/types";

export function isValidTextWithTransitionTable<
  S extends State,
  A extends Alphabet,
>(text: string, tt: TransitionTable<S, A>) {
  let currentState: S = tt.startState;

  for (const char of text) {
    if (!tt.transitionTable[currentState][char as A]) {
      return false;
    }

    currentState = tt.transitionTable[currentState][char as A];
  }

  return tt.endStates.includes(currentState);
}
