import React from 'react';
import { Text } from 'react-native';

const Item = (props) => {
	return (
		<div>
			<form>
				<label htmlFor="todoTitle">Title:</label>
				<input id="todoTitle" />
				<button>Button to add a list item</button>
			</form>
		</div>

		// <div>
		// 	<li>Hello, I am your {props.message} item!</li>
		// 	<button>Button to remove this item.</button>
		// </div>
	);
};

export default Item;
