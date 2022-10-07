export const validateEmail = (email: string) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

export const validatePhoneNumber = (phoneNumber: string) => {
  return /^\+?[1-9]\d{1,14}$/.test(phoneNumber);
};

// Minimum 8 characters, at least one letter, one number, and one special character
export const validatePassword = (password: string) => {
  return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
};

// TODO
export const validateDOB = (dob: string) => {
  return 0;
};

// TODO
export const validateAddress = (address: string) => {
  return 0;
};
