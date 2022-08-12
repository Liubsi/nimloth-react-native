import { createTheme } from '@rneui/themed';

// Enforce the font across the app

const theme = createTheme({
  Input: {
    style: {
      fontFamily: 'Urbanist',
      fontSize: 14,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    inputContainerStyle: {
      borderBottomWidth: 0,
    },
    containerStyle: {
      height: 45,
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
  SearchBar: {
    lightTheme: true,
    inputContainerStyle: {},
    containerStyle: {
      backgroundColor: '#FFFFFF',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
    },
    style: {
      fontFamily: 'Urbanist',
    },
  },
});

export default theme;
