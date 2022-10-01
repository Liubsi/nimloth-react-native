export const validateEmail = (email: string) => {
  return 0;
};

export const validatePhoneNumber = (phoneNumber: string) => {
  return 0;
};

// Minimum 8 characters, at least one letter, one number, and one special character
export const validatePassword = (password: string) => {
  return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
};
