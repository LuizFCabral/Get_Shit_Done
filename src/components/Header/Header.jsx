import React from 'react';
import { RxAvatar } from 'react-icons/rx';

import './Header.css';
import Input from '../Input/Input';

const Header = ({ tipo, handleSerach, handleVisibilitypopup, visibility }) => {
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
				<p className="nome-user">Nome</p>
				<RxAvatar
					className="img-user"
					onClick={() =>
						handleVisibilitypopup(
							visibility === 'visible' ? 'hidden' : 'visible'
						)
					}
				/>
				<div
					className="popupHeader"
					style={{
						visibility: visibility,
					}}
				>
					<div className="item-popup">
						<a href="/profile">Perfil</a>
					</div>
					<div className="item-popup">
						<a href="#">Sair</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
