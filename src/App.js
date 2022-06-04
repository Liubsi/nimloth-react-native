import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
} from 'react-native';
import { registerRootComponent } from 'expo';

const icon = require('../assets/splash.png');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		marginBottom: 40,
	},
	inputView: {
		backgroundColor: '#FFC0CB',
		borderRadius: 30,
		width: '70%',
		height: 45,
		marginBottom: 20,
		alignItems: 'center',
	},
	TextInput: {
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
	},
	forgotButton: {
		height: 30,
		marginBottom: 30,
	},
	loginButton: {
		width: '80%',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		backgroundColor: '#FF1493',
	},
});

function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View style={styles.container}>
			{/* <Image source={icon}/> */}
			<StatusBar style={{ color: 'auto' }} />

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder='Email'
					placeholderTextColor='#003f5c'
					onChangeText={(email) => setEmail(email)}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder='Password'
					placeholderTextColor='#003f5c'
					secureTextEntry
					onChangeText={(password) => setPassword(password)}
				/>
			</View>

			<TouchableOpacity>
				<Text style={styles.forgotButton}>Forgot Password</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.loginButton}>
				<Text style={styles.loginText}>Login</Text>
			</TouchableOpacity>
		</View>
	);
}

export default registerRootComponent(App);
