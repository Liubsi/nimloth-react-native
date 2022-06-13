import { createTheme } from '@rneui/themed';

const theme = createTheme({
  Input: {
    style: {
      fontFamily: 'Raleway',
      fontSize: 10,
      color: 'white',
      backgroundColor: 'white',
      borderRadius: 10,
      textAlign: 'center',
    },
    inputContainerStyle: {
      borderBottomWidth: 0,
    },
  },
});

export default theme;
