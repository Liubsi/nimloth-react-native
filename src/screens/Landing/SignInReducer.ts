type State = {
  email: string;
  password: string;
  isButtonDisabled: boolean;
  isError: boolean;
};

export const initialState: State = {
  email: '',
  password: '',
  isButtonDisabled: true,
  isError: false,
};

type Action =
  | { type: 'setEmail'; payload: string }
  | { type: 'setIsButtonDisabled'; payload: boolean }
  | { type: 'setPassword'; payload: string }
  | { type: 'signInSuccess'; payload: string }
  | { type: 'signInFailed'; payload: string }
  | { type: 'setIsError'; payload: boolean };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setEmail':
      return {
        ...state,
        email: action.payload,
      };
    case 'setPassword':
      return {
        ...state,
        password: action.payload,
      };
    case 'setIsButtonDisabled':
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case 'signInSuccess':
      return {
        ...state,
        isError: false,
      };
    case 'signInFailed':
      return {
        ...state,
        isError: true,
      };
    case 'setIsError':
      return {
        ...state,
        isError: action.payload,
      };
    default:
      throw new TypeError();
  }
};
