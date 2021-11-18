import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Item from './Item';

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [],
			id: 0,
			title: '',
		};
	}

	render() {
		return (
			<View style={this.props.styles}>
				{/* <Text>{this.state.title}</Text> */}
				<Text>{this.props.title}</Text>
				<button onClick={this.props.removeList}>Button in List to remove the entire list.</button>
				<button onClick={() => console.log('Button in List to add an item to the list.')}>
					Button to add an item to the list.
				</button>

				{/* <ul>
				<Item message="first" />
				<Item message="second" />
			</ul> */}
			</View>
		);
	}
}
