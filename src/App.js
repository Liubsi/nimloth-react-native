import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

function App() {
	return (
		<View style={styles.container}>
			<Text>Nimloth</Text>
			<StatusBar style={{ color: 'auto' }} />
		</View>
	);
}

export default registerRootComponent(App);
