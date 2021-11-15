import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import List from './src/js/components/List';

const User = () => {
	return <p>User</p>;
};

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ternary_statement: false,
			isToggleOn: true,
			users: [],
			id: 0,
			lists: [],
			abc: 0,
		};
		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	addUser = () => {
		this.setState({
			users: [ ...this.state.users, <User key={this.state.id} /> ],
			id: this.state.id + 1,
		});
	};

	addList = () => {
		this.setState({
			lists: [ ...this.state.lists, <List key={this.state.abc} /> ],
			abc: this.state.abc + 1,
		});
	};

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
				<button onClick={this.addUser}>Add User</button>
				{this.state.users}
				<button onClick={this.addList}>Add List</button>
				{this.state.lists}
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
