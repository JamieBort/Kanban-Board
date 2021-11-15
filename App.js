import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import List from './src/js/components/List';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ternary_statement: false,
			isToggleOn: true,
			lists: [],
			id: 0,
		};
		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	addList = () => {
		this.setState({
			lists: [
				...this.state.lists,
				<div key={this.state.id} id={this.state.id}>
					<List number={this.state.id} />
					<button onClick={this.removeList}>Button in App to remove the entire list.</button>
					{/* <p>{this.state.lists[0]['key']}</p> */}
				</div>,
			],
			id: this.state.id + 1,
		});
		// console.log('this.state.lists: ', this.state.lists);
		// console.log(this.state.lists_abc);
	};

	removeList = (event) => {
		// const tn = document.getElementsByTagName('div')[4];
		// console.log('tn: ', tn);
		// const number = document.getElementById('0');
		// console.log('number: ', number);
		// console.log(document.getElementById(event.srcElement.id));
		// console.log(event.target.parentElement.id);

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

		// if array element number matches the key, then remove it remove this one.
		// console.log('this.state.id: ', this.state.id);

		// console.log("this.state.lists[0]['key']: ", this.state.lists[0]['key']);
		// console.log('this.state.lists[0]: ', this.state.lists[0]);

		// function filterFunction(value) {
		// 	return value >= 10;
		// }
		// let filtered = [ 12, 5, 8, 130, 44 ].filter(filterFunction);
		// console.log(filtered);

		// let tempArray = [];
		// for (let i = 0; i < this.state.lists.length; i++) {
		// 	// this.state.lists.forEach((element) => {
		// 	// console.log(this.state.lists[i]['key']);
		// 	if (this.state.lists[i]['key'] != 2) {
		// 		console.log('yes');
		// 		tempArray.push(this.state.lists[i]);
		// 	}
		// }
		// console.log('tempArray: ', tempArray);
		// this.setState({ lists: tempArray });

		// console.log(event);
		// const temp1 = this.state.lists;
		// const temp = temp1.slice(1, this.state.lists.length);
		// console.log('temp: ', temp);

		// this.setState({
		// 	// lists: this.state.lists.filter((something) => [ something ]['key'] !== 1),
		// 	lists: temp,
		// });

		// if (this.state.id == this.state.lists[0]['key']) {
		// 	console.log('what do I have here?');
		// }
	};

	oldRemoveList = () => {
		if (this.state.lists[0]['key'].includes(0)) {
			console.log('then remove 0: ', this.state.lists[0]);
			// var result = this.state.lists.splice(0, 1);
			var result = this.state.lists.slice(1, this.state.lists.length);
		}

		// const index = this.state.lists.indexOf(this.state.lists[0]['key']);
		// console.log('index: ', index);

		// const result = this.state.lists.splice(0, 1);

		// const result = this.state.lists.splice(this.state.lists.indexOf(0), 1);

		// var array = this.state.lists;
		// const result = this.state.lists.filter((value) => [ value ]['key'] != 0);
		// console.log(...array);
		console.log('result: ', result);
		// console.log('remove this specific one');
		// if (this.state.lists[0]) console.log(this.state.lists[0]['key']);
		// console.log('before array: ', array);
		// this.setState({
		// 	lists: [],
		// });
		// console.log('after this.state.lists: ', this.state.lists);

		// console.log(this.state.lists);
		// var array = this.state.lists;
		// this.setState({
		// 	lists: array.pop(),
		// 	// lists: [ ...this.state.lists, this.state.lists.pop() ],
		// 	// id: this.state.id + 1,
		// });
		// console.log(this.state.lists);

		// console.log(this.state.lists[0]['key'].includes(0));
		// console.log(this.state.lists[2]['key'].includes(2));
		// console.log(this.state.lists[1]['key'].includes(0));
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

	displayListsArray = () => {
		console.log(this.state.lists);
		// if (this.state.lists[0]) console.log(this.state.lists[0]['key']);
	};

	render() {
		return (
			<View style={styles.container}>
				<h1>The List App</h1>

				{/* Commented out because I don't need these at the moment. */}
				{/* <button onClick={this.handleClick}>{this.state.isToggleOn ? 'Toggle ON' : 'Toggle OFF'}</button>
				<button onClick={this.triggerButton}>Toggle button for the List component.</button>
				{this.state.ternary_statement ? <List /> : null}
				<button onClick={() => console.log('working')}>If pressed, List component will be added.</button> */}

				<button onClick={this.addList}>Add List</button>
				{this.state.lists}
				<button onClick={this.displayListsArray}>Display Array</button>

				{/* <button onClick={this.oldRemoveList}>Remove List</button> */}
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
