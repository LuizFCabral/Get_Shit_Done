import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Projetos from '../../components/Projeto/Projetos';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form-AddProj';

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
	const [visibility, setVisibility] = useState('hidden');

	useEffect(() => {
		const fechtProject = async () => {
			const { data } = await axios.get('http://localhost:3500/project');
			console.log(data);
			setProjects(data);
		};

		fechtProject();
	}, []);

	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	const handleAddProject = (titulo) => {
		const newProject = [
			...projects,
			{
				id: 3,
				manager_id: 1,
				nome: titulo,
				descricao: 'New project',
				aparencia: getRandomColor(),
			},
		];

		setProjects(newProject);
	};
	const handleVisibility = (visibility) => {
		setVisibility(visibility);
	};

	return (
		<div className="body">
			<Header />
			<Projetos projects={projects} handleVisibility={handleVisibility} />
			<Form
				titulo="add project"
				handleAddProject={handleAddProject}
				handleVisibility={handleVisibility}
				visibility={visibility}
			/>
		</div>
	);
};

export default Home;
