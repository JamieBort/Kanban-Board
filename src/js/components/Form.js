import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import List from './List';

export default class Form extends Component {
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
		// this title change now need to go to the List component. Redux?
		this.setState({
			title: listTitle,
		});
	};

	handleListAdd = (event) => {
		event.preventDefault();
		console.log('this.state.title: ', this.state.title);
		console.log('event.target.form_input.value: ', event.target.form_input.value);
		event.target.form_input.value = '';
	};

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

	// addList = () => {
	// 	console.log('this.state: ', this.state);
	// 	console.log('this.state.title: ', this.state.title);
	// 	this.setState({
	// 		lists: [
	// 			...this.state.lists,
	// 			<div key={this.state.id} id={this.state.id}>
	// 				<List
	// 					number={this.state.id}
	// 					title={this.state.title}
	// 					removeList={this.props.removeList}
	// 					// removeListTemp={this.removeListTemp}
	// 					tempFunction={this.tempFunction}
	// 					styles={this.props.styles.list}
	// 				/>
	// 				<button onClick={this.removeList}>Button in App to remove the entire list.</button>
	// 			</div>,
	// 		],
	// 		id: this.state.id + 1,
	// 	});
	// 	// console.log('this.state.lists: ', this.state.lists);
	// };

	render() {
		return (
			<View style={this.props.styles.form}>
				<h2>Inside the form</h2>
				<form onSubmit={this.handleListAdd}>
					{/* maybe omit this label element */}
					{/* <label>Label: </label> */}
					{/* value attribute for input element - The initial value of the control. */}
					<input id="form_input" onChange={this.handleListChange} />
					<button onClick={this.props.addList}>Add List</button>
					{/* <button onClick={this.addList}>Add List (inside)</button> */}
				</form>
				{/* {this.state.lists} */}
			</View>
		);
	}
}
