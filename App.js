import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import List from './src/js/components/List';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [],
			id: 0,
			title: '',
		};
	}

	handleListChange = (event) => {
		const listTitle = event.target.value;
		console.log('listTitle: ', listTitle);
		this.setState({
			title: listTitle,
		});
	};

	handleListAdd = (event) => {
		event.preventDefault();
		// console.log('event.target.form_input.value: ', event.target.form_input.value);
		event.target.form_input.value = '';
	};

	addList = () => {
		this.setState({
			lists: [
				...this.state.lists,
				<div key={this.state.id} id={this.state.id}>
					<List number={this.state.id} title={this.state.title} />
					<button onClick={this.removeList}>Button in App to remove the entire list.</button>
				</div>,
			],
			id: this.state.id + 1,
		});
		// console.log('this.state.lists: ', this.state.lists);
	};

	removeList = (event) => {
		let tempArray = [];
		for (let i = 0; i < this.state.lists.length; i++) {
			if (event.target.parentElement.id != this.state.lists[i]['key']) {
				console.log('event.target.parentElement.id: ', event.target.parentElement.id);
				console.log("this.state.lists[i]['key']: ", this.state.lists[i]['key']);
				tempArray.push(this.state.lists[i]);
			}
		}
		console.log('tempArray: ', tempArray);
		this.setState({ lists: tempArray });
		console.log('---------------------------------');
	};

	render() {
		return (
			<View style={styles.container}>
				<h1>The List App</h1>
				<form onSubmit={this.handleListAdd}>
					{/* maybe omit this label element */}
					{/* <label>Label: </label> */}
					{/* value attribute for input element - The initial value of the control. */}
					<input id="form_input" onChange={this.handleListChange} />
					<button onClick={this.addList}>Add List</button>
				</form>
				{this.state.lists}
				<button onClick={() => console.log(this.state.lists)}>Display Array</button>
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
