import React from 'React';
import './Input.css';

const Input = ({ tipoInput }) => {
	if (tipoInput == 'email') {
		return (
			<div className="input-field">
				<input placeholder={tipoInput} name="nome" type={tipoInput} />
			</div>
		);
	} else if (tipoInput == 'password') {
		return (
			<div className="input-field">
				<input placeholder={tipoInput} name="nome" type={tipoInput} />
			</div>
		);
	}
};

export default Input;
