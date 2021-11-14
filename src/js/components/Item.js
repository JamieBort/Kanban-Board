import React from 'react';
import { Text } from 'react-native';

const Item = (props) => {
	return (
		<div>
			<li>Hello, I am your {props.message} item!</li>
			<button>Button to remove this item.</button>
		</div>
	);
};

export default Item;
