import React from 'react';
import { Text } from 'react-native';
import Item from './Item';

const List = () => {
	return (
		<div>
			<Text>Hello, I am your List!</Text>
			<button>Button to remove a list.</button>
			<button>Button to add an item.</button>
			<ul>
				<Item message="first" />
				<Item message="second" />
			</ul>
		</div>
	);
};

export default List;
