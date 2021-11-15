import React from 'react';
import { Text } from 'react-native';
import Item from './Item';

const List = () => {
	return (
		<div>
			<Text>Hello, I am your List!</Text>
			<button>Button to remove the entire list.</button>
			<button>Button to add an item to the list.</button>
			{/* <ul>
				<Item message="first" />
				<Item message="second" />
			</ul> */}
		</div>

		// <div>
		// 	<form>
		// 		<label htmlFor="todoTitle">Title:</label>
		// 		<input id="todoTitle" />
		// 		<button>Button to add a list item</button>
		// 	</form>
		// </div>
	);
};

export default List;
