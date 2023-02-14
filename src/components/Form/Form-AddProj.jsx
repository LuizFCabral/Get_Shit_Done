import React, { useState } from 'react';

import './Form.css';

import Input from '../Input/Input';
import Button from '../Button/Button';

const FormAddProj = ({
	titulo,
	handleAddProject,
	visibility,
	handleVisibility,
}) => {
	const [inputData, setInputData] = useState('');

	const handleOnChange = (e) => {
		setInputData(e.target.value);
	};

	const handleOnclick = () => {
		if (inputData.length != 0) {
			handleAddProject(inputData);
			setInputData('');
			//handleVisibility('hidden');
		}
	};

	return (
		<form
			className="form"
			style={{
				position: 'absolute',
				justifyContent: 'center',
				alignSelf: 'center',
				zIndex: 4,
				border: '4px solid #67159c',
				visibility: visibility,
			}}
		>
			<div className="title-form">{titulo.toUpperCase()}</div>
			<div className="inputContainer">
				<div className="input-box">
					<label>
						<p>Título</p>
						<Input
							type="text"
							name="titulo"
							placeholder="Informe o Título"
							handleOnChange={handleOnChange}
							value={inputData}
						/>
					</label>
				</div>
				<Button type="submit" handleOnclick={handleOnclick}>
					Adicionar
				</Button>
			</div>
		</form>
	);
};

export default FormAddProj;
