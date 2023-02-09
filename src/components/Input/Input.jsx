import React from 'React';
import './Input.css';

const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
	return (
		<div className="input-field">
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleOnChange}
			/>
		</div>
	);
};

export default Input;
