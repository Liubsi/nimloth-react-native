export type Action =
  | { type: 'setEmail'; payload: string }
  | { type: 'setIsButtonDisabled'; payload: boolean }
  | { type: 'setPassword'; payload: string }
  | { type: 'signInSuccess'; payload: string }
  | { type: 'signInFailed'; payload: string }
  | { type: 'setIsError'; payload: boolean };
