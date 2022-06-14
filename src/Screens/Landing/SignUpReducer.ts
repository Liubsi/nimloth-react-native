type State = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  isButtonDisabled: boolean;
  isError: boolean; // unused
};

export const initialState: State = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  isButtonDisabled: true,
  isError: false,
};

type Action =
  | { type: 'setFirstName'; payload: string }
  | { type: 'setLastName'; payload: string }
  | { type: 'setEmail'; payload: string }
  | { type: 'setPhoneNumber'; payload: string }
  | { type: 'setIsButtonDisabled'; payload: boolean }
  | { type: 'setPassword'; payload: string }
  | { type: 'signUpSuccess'; payload: string }
  | { type: 'signUpFailed'; payload: string }
  | { type: 'setIsError'; payload: boolean };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setFirstName':
      return {
        ...state,
        firstName: action.payload,
      };
    case 'setLastName':
      return {
        ...state,
        lastName: action.payload,
      };
    case 'setEmail':
      return {
        ...state,
        email: action.payload,
      };
    case 'setPhoneNumber':
      return {
        ...state,
        phoneNumber: action.payload,
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
    case 'signUpSuccess':
      return {
        ...state,
        isError: false,
      };
    case 'signUpFailed':
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
