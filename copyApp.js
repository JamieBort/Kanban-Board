import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import List from './src/js/components/List';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: Boolean(),
		};
		this.handleShow = this.handleShow.bind(this);
	}
	handleShow() {
		this.setState((prevState) => {
			return {
				show: !prevState.show,
			};
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<h1>The List app</h1>
				<button onClick={this.handleShow}>Button to add a list.</button>
				{this.state.show ? <List /> : null}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
