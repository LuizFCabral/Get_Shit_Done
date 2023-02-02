import React from 'react';

import Projeto from './Projeto';

import './Projetos.css';

const Projetos = ({ projects }) => {
	return (
		<div className="container-projetos">
			{projects.map((project) => (
				<Projeto project={project} />
			))}
		</div>
	);
};

export default Projetos;
