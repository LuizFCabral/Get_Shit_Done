import React, { useState } from 'react';
import { RxPlus } from 'react-icons/rx';

import Projeto from './Projeto';

import './Projetos.css';

const Projetos = ({ projects, handleVisibilityForm }) => {
	return (
		<div className="container-projetos">
			{projects.map((project) => (
				<Projeto project={project} />
			))}
			<div
				className="add-projeto"
				onClick={() => handleVisibilityForm('visible')}
			>
				<RxPlus />
			</div>
		</div>
	);
};

export default Projetos;
