import { createTheme } from '@rneui/themed';

const theme = createTheme({
  Input: {
    style: {
      fontFamily: 'Raleway',
      backgroundColor: 'white',
      borderRadius: 10,
    },
    inputContainerStyle: {
      borderBottomWidth: 0,
    },
  },
  Button: {
    titleStyle: {
      fontFamily: 'Raleway',
    },
  },
  Text: {
    style: {
      fontFamily: 'Raleway',
    },
  },
});

export default theme;
