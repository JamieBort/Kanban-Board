import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import List from './src/js/components/List';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>The List app</Text>
			<button>Button to add a list.</button>
			<List />
		</View>
	);

	// const [ status, setStatus ] = React.useState(false);

	// const toggle = () => {
	// 	console.log(status);
	// 	let update = status ? false : true;
	// 	setStatus(update);
	// 	console.log(status);
	// };

	// if (status) {
	// 	return (
	// 		<View style={styles.container}>
	// 			<TouchableOpacity onPress={toggle}>
	// 				<Text>Press me</Text>
	// 				{/* <List title={'My First List'} firstItem={'My first item'} /> */}
	// 			</TouchableOpacity>

	// 			<List title={'My First List'} firstItem={'My first item'} />
	// 		</View>
	// 	);
	// }
	// return (
	// 	<View style={styles.container}>
	// 		<TouchableOpacity onPress={toggle}>
	// 			<Text>Press me</Text>
	// 		</TouchableOpacity>
	// 	</View>
	// );
}

// const List = (props) => {
// 	return (
// 		<div>
// 			<h1>{props.title}</h1>
// 			<p>{props.firstItem}</p>
// 		</div>
// 	);
// };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
