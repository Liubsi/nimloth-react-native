import { createTheme } from '@rneui/themed';

// Enforce the font across the app

const theme = createTheme({
  components: {
    Input: {
      renderErrorMessage: false,
      style: {
        fontFamily: 'Urbanist',
        backgroundColor: 'white',
      },
      containerStyle: {
        paddingRight: 0,
        paddingLeft: 0,
      },
      inputContainerStyle: {
        borderBottomWidth: 0,
        paddingVertical: 0,
        paddingHorizontal: 0,
      },
      rightIconContainerStyle: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginVertical: 0,
        marginHorizontal: 0,
      },
      leftIconContainerStyle: {
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginVertical: 0,
        marginHorizontal: 0,
      },
      inputStyle: {
        paddingVertical: 0,
        paddingHorizontal: 0,
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
      inputContainerStyle: {
        backgroundColor: 'white',
      },
      containerStyle: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
      },
      style: {
        fontFamily: 'Urbanist',
      },
    },
  },
});

export default theme;
