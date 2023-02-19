import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import './Header.css';
import Input from '../Input/Input';

const Header = ({ tipo, handleSerach }) => {
	const handleOnChange = (e) => {
		handleSerach(e.target.value);
	};
	return (
		<div className="container-header">
			<h2 className="logo">LOGO</h2>
			{tipo === 'home' ? (
				<Input
					placeholder={'Pesquisar'}
					height={'40px'}
					fontSize={'1.3rem'}
					width={'50%'}
					border={'50px'}
					handleOnChange={handleOnChange}
				/>
			) : (
				''
			)}

			<div className="info-user">
				<h2 className="nome-user">Nome</h2>
				<Link to="/profile" className="link">
					<RxAvatar className="img-user" />
				</Link>
			</div>
		</div>
	);
};

export default Header;
