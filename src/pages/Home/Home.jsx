import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Projetos from '../../components/Projeto/Projetos';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form-AddProj';

import './Home.css';

const Home = () => {
	const [projects, setProjects] = useState([]);
	const [visibility, setVisibility] = useState('hidden');

	const fechtProject = async (parte) => {
		const { data } = await axios.get(`http://localhost:3000/project/${parte}`);
		console.log(data);
		setProjects(data);
	};

	useEffect(() => {
		fechtProject('');
	}, []);

	const handleSerach = async (partePesquisa) => {
		fechtProject(partePesquisa);
	};

	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	const handleAddProject = async (titulo) => {
		const newProject = {
			manager_id: 1,
			nome: titulo,
			descricao: '',
			aparencia: getRandomColor(),
		};

		await axios
			.post('http://localhost:3000/project', newProject)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleVisibility = (visibility) => {
		setVisibility(visibility);
	};

	return (
		<div className="body">
			<Header tipo={'home'} handleSerach={handleSerach} />

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
