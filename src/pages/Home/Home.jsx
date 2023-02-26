import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Projetos from '../../components/Projeto/Projetos';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form-AddProj';

import './Home.css';

const Home = () => {
	const [projects, setProjects] = useState([]);
	const [visibilityForm, setVisibilityForm] = useState('hidden');
	const [visibilitypopup, setVisibilitypopup] = useState('hidden');

	const fechtProject = async (parte) => {
		const { data } = await axios.get(`http://localhost:3000/project/${parte}`);
		console.log(data);
		setProjects(data);
	};

	useEffect(() => {
		fechtProject('');
	}, []);

	const handleSearch = async (partePesquisa) => {
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

	//visibilidade dos elementos
	const handleVisibilityForm = (visibility) => {
		setVisibilityForm(visibility);
	};
	const handleVisibilitypopup = (visibility) => {
		setVisibilitypopup(visibility);
	};

	return (
		<div className="body">
			<Header
				tipo={'home'}
				handleSearch={handleSearch}
				handleVisibilitypopup={handleVisibilitypopup}
				visibility={visibilitypopup}
			/>

			<Projetos
				projects={projects}
				handleVisibilityForm={handleVisibilityForm}
			/>
			<Form
				titulo="add project"
				handleAddProject={handleAddProject}
				handleVisibilityForm={handleVisibilityForm}
				visibility={visibilityForm}
			/>
		</div>
	);
};

export default Home;
