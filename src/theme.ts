import { createTheme } from '@rneui/themed';

// Enforce the font across the app

const theme = createTheme({
  Input: {
    style: {
      fontFamily: 'Urbanist',
      backgroundColor: 'white',
      borderRadius: 10,
    },
    inputContainerStyle: {
      borderBottomWidth: 0,
    },
  },
  Button: {
    titleStyle: {
      fontFamily: 'Urbanist',
    },
  },
  Text: {
    style: {
      fontFamily: 'Urbanist',
    },
  },
});

export default theme;
