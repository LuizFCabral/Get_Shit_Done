import React from 'react';
import './Input.css';

const Input = ({
	type,
	text,
	name,
	placeholder,
	handleOnChange,
	value,
	width,
	height,
	fontSize,
	border,
}) => {
	return (
		<div className="input-field" style={{ width: width }}>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleOnChange}
				style={{
					maxHeight: height,
					minWidth: width,
					fontSize: fontSize,
					borderRadius: border,
				}}
			/>
		</div>
	);
};

export default Input;
