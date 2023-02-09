import React from 'React';
import './Form.css';

import Input from '../Input/Input';

const Form = () => {
	const tipoEmail = 'email';
	const tipoSenha = 'password';

	return (
		<form method="POST" className="form">
			<div className="title-form">SIGN IN</div>
			<div className="inputContainer">
				<div className="input-box">
					<label htmlFor="name">
						<p>NOME</p>
						<Input tipoInput={tipoEmail} />
					</label>
				</div>
				<div className="input-box">
					<label htmlFor="password">
						<p>SENHA</p>
						<Input tipoInput={tipoSenha} />
					</label>
				</div>
				<button type="#" className="btn">
					LOGIN
				</button>
			</div>
		</form>
	);
};

export default Form;
