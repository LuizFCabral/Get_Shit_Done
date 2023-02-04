import React, { useState } from 'react';

import Projetos from '../../components/Projeto/Projetos';
import Header from '../../components/Header/Header';

import './Home.css';

const Home = () => {
	const [projects, setProjects] = useState([
		{
			id: 0,
			manager_id: 1,
			nome: 'Faculdade',
			descricao: 'Sempre estudadno',
			aparencia: '#302472',
		},
		{
			id: 1,
			manager_id: 1,
			nome: 'Trabalho',
			descricao: 'Sempre trabalhando',
			aparencia: '#1a5834',
		},
		{
			id: 2,
			manager_id: 1,
			nome: 'Férias',
			descricao: 'Planejando as férias',
			aparencia: '#277e94',
		},
		{
			id: 3,
			manager_id: 1,
			nome: 'Macarronada',
			descricao: 'Planejando a macarronada de domingo',
			aparencia: '#b64cad',
		},
	]);

	const handleAddProject = () => {
		const newProject = [
			...projects,
			{
				id: 3,
				manager_id: 1,
				nome: 'New Project',
				descricao: 'New project',
				aparencia: '#46d359d5',
			},
		];

		setProjects(newProject);
	};

	return (
		<div className="body">
			<Header />
			<Projetos projects={projects} handleAddProject={handleAddProject} />
		</div>
	);
};

export default Home;
