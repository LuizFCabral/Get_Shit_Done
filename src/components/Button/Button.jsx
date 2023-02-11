import React from 'react';
import './Button.css';

const Button = ({ children, type, handleOnclick }) => {
	return (
		<button className="btn" type={type} onClick={handleOnclick}>
			{children.toUpperCase()}
		</button>
	);
};

export default Button;
