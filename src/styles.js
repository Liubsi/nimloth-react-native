import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginLogoOffset: {
    paddingTop: 50,
    paddingLeft: 20,
  },
  loginLogo: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  logo: {
    fontWeight: 'bold',
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputContainer: {
    width: '87%',
    backgroundColor: '#465881',
    borderRadius: 25,
    paddingRight: 20,
    paddingLeft: 20,
    borderBottomWidth: 0,
  },
  forgot: {
    color: 'white',
    fontSize: 11,
    backgroundColor: '#003f5c',
  },
  loginButton: {
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 15,
  },
  registerButton: {
    color: 'white',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    marginBottom: 10,
  },
});

export default styles;
