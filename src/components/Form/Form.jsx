import React from 'React';
import './Form.css';

const Form = () => {
	return (
		<form method="POST" className="form">
			<div className="title-form">SIGN IN</div>
			<div className="inputContainer">
				<div className="input-box">
					<label htmlFor="name">
						<p>NOME</p>
						<div className="input-field">
							<input name="nome" type="text" />
						</div>
					</label>
				</div>
				<div className="input-box">
					<label htmlFor="password">
						<p>SENHA</p>
						<div className="input-field">
							<input name="senha" type="password" />
						</div>
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
