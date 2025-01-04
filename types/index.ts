export interface ValidationResult {
  isValid: boolean;
  error: string[];
}

export type State = `q${string}`;
export type Alphabet = `${string}`;

export interface TransitionTable<S extends State, A extends Alphabet> {
  startState: S;
  endStates: S[];
  transitionTable: {
    [K in S]: Record<A, S>;
  };
}
