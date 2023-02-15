import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

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
		}
	};

	return (
		<form
			className="form"
			style={{
				position: 'absolute',
				justifyContent: 'center',
				alignSelf: 'center',
				marginTop: '5%',
				zIndex: 4,
				border: '4px solid #67159c',
				minHeight: '30rem',
				visibility: visibility,
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: '20px',
					right: '15px',
					backgroundColor: 'transparent',
					color: '#67159c',
					border: 'None',
					fontSize: '2.5rem',
					cursor: 'pointer',
				}}
				onClick={() => handleVisibility('hidden')}
			>
				<RxCross2 />
			</div>
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
