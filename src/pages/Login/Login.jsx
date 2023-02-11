import React from 'react';
import './Login.css';
import Formlogin from '../../components/Form/Form-login';

const Login = () => {
	return (
		<div className="fundo">
			<div className="logotipo">Logo</div>
			<div className="containerForm">
				<Formlogin titulo="sign in" />
			</div>
		</div>
	);
};

export default Login;
