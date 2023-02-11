import React from 'react';
import './Form.css';

import Input from '../Input/Input';
import Button from '../Button/Button';

const Formlogin = ({ titulo }) => {
	return (
		<form method="POST" className="form">
			<div className="title-form">{titulo.toUpperCase()}</div>
			<div className="inputContainer">
				<div className="input-box">
					<label>
						<p>Email</p>
						<Input
							type="text"
							name="email"
							placeholder="Informe o seu e-mail"
						/>
					</label>
				</div>
				<div className="input-box">
					<label>
						<p>Senha</p>
						<Input
							type="password"
							name="senha"
							placeholder="Digite sua senha"
						/>
					</label>
				</div>
				<Button type="submit">login</Button>
			</div>
		</form>
	);
};

export default Formlogin;
