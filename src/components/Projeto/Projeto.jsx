import React from 'react';

import './Projeto.css';

const Projeto = ({ project }) => {
	return (
		<div
			className="container-projeto"
			style={{ background: project.aparencia }}
		>
			<h3 className="title-project">{project.nome}</h3>
		</div>
	);
};

export default Projeto;
