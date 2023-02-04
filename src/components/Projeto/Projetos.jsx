import React from 'react';
import { RxPlus } from 'react-icons/rx';

import Projeto from './Projeto';

import './Projetos.css';

const Projetos = ({ projects, handleAddProject }) => {
	return (
		<div className="container-projetos">
			{projects.map((project) => (
				<Projeto project={project} />
			))}
			<div className="add-projeto" onClick={() => handleAddProject()}>
				<RxPlus />
			</div>
		</div>
	);
};

export default Projetos;
