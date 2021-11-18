import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import List from './src/js/components/List';
import Form from './src/js/components/Form';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [],
			id: 0,
			title: '',
		};
	}

	// handleListChange = (event) => {
	// 	const listTitle = event.target.value;
	// 	console.log('listTitle: ', listTitle);
	// 	this.setState({
	// 		title: listTitle,
	// 	});
	// };

	// handleListAdd = (event) => {
	// 	event.preventDefault();
	// 	// console.log('event.target.form_input.value: ', event.target.form_input.value);
	// 	event.target.form_input.value = '';
	// };

	addList = () => {
		console.log('this.state: ', this.state);
		console.log('this.state.title: ', this.state.title);
		this.setState({
			lists: [
				...this.state.lists,
				<div key={this.state.id} id={this.state.id}>
					<List
						number={this.state.id}
						title={this.state.title}
						removeListTemp={this.removeListTemp}
						tempFunction={this.tempFunction}
						styles={styles.list}
					/>
					<button onClick={this.removeList}>Button in App to remove the entire list.</button>
				</div>,
			],
			id: this.state.id + 1,
		});
		// console.log('this.state.lists: ', this.state.lists);
	};

	removeList = (event) => {
		console.log('abled');
		console.log('this.state.lists: ', this.state.lists);
		let tempList = [];
		for (let i = 0; i < this.state.lists.length; i++) {
			if (event.target.parentElement.id != this.state.lists[i]['key']) {
				// console.log('event.target.parentElement.id: ', event.target.parentElement.id);
				// console.log("this.state.lists[i]['key']: ", this.state.lists[i]['key']);
				tempList.push(this.state.lists[i]);
			}
		}
		// console.log('tempList: ', tempList);
		this.setState({ lists: tempList });
		// console.log('---------------------------------');
	};

	removeListTemp = (event) => {
		console.log('Button in List to remove the entire list.');
		let tempList = [];
		for (let i = 0; i < this.state.lists.length; i++) {
			if (event.target.parentElement.id != this.state.lists[i]['key']) {
				// console.log('event.target.parentElement.id: ', event.target.parentElement.id);
				// console.log("this.state.lists[i]['key']: ", this.state.lists[i]['key']);
				tempList.push(this.state.lists[i]);
			}
		}
		// console.log('tempList: ', tempList);
		// this.setState({ lists: tempList });
		this.setState({ lists: [] });
		// console.log('---------------------------------');
	};

	tempFunction = (event) => {
		console.log('param');
		// console.log(event);
		console.log(this.state.lists);
	};

	render() {
		return (
			<View style={styles.container}>
				<h1>The List App</h1>
				<Form addList={this.addList} removeList={this.removeList} styles={styles} />
				{/* <form onSubmit={this.handleListAdd}>
					<input id="form_input" onChange={this.handleListChange} />
					<button onClick={this.addList}>Add List</button>
				</form> */}
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
	form: {
		// flex: 1,
		backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center',
	},
	list: {
		// flex: 1,
		backgroundColor: 'green',
		// alignItems: 'center',
		// justifyContent: 'center',
		padding: 2,
	},
});
