import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import List from './src/js/components/List';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ternary_statement: false,
			isToggleOn: true,
		};
		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('Inside the handleClick');
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn,
		}));
	}

	triggerButton = () => {
		console.log('Inside the triggerButton');
		this.setState((toggle) => ({
			ternary_statement: !toggle.ternary_statement,
		}));
	};

	render() {
		return (
			<View style={styles.container}>
				<h1>The List App</h1>
				<button onClick={this.handleClick}>{this.state.isToggleOn ? 'Toggle ON' : 'Toggle OFF'}</button>
				<button onClick={this.triggerButton}>Toggle button for the List component.</button>
				{this.state.ternary_statement ? <List /> : null}
				<button onClick={() => console.log('working')}>If pressed, List component will be added.</button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightblue',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
