import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
	const handleClickUser = () => {};

	return (
		<div className="container">
			<h2 className="logo">logo</h2>
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
