import { TextField } from '@mui/material';
import React, { useState } from 'react';
import host from '../../data/host';
const classes = {
	button: {
		border: 'none',
		borderRadius: '100px',
		width: '150px',
		height: '55px',
		backgroundColor: '#fa2d64',
		color: '#ffffff',
		fontStyle: 'normal',
		fontFamily: 'Inter',
		fontWeight: '600',
		textAlign: 'center',
		fontSize: '26px',
		cursor: 'pointer',
	},
	fontname: {
		fontFamily: 'Inter',
	},
};
const AddProject = () => {
	const [project_id, setProject_id] = useState('');
	const [topic, setTopic] = useState('');
	const [description, setDescription] = useState('');
	const [err, setErr] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			project_id,
			topic,
			description,
		};
		var axios = require('axios');
		var config = {
			method: 'post',
			url: `${host.host}/project`,
			data: data,
			headers: {
				Credentials: `Bearer ${localStorage.getItem('dbisToken')}`,
			},
		};
		console.log(config);
		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				setErr('');
			})
			.catch((err) => {
				console.log(err.response);
				setErr(err.response.data.detail);
			});
	};

	return (
		<div
			style={{
				height: '100vh',
				width: '100vw',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					flexDirection: 'column',
					width: '500px',
					boxShadow: '0px 0px 15px -1px rgba(0,0,0,0.74)',
					borderRadius: '12px',
				}}
			>
				<h1
					style={{
						fontSize: '2em',
						fontWeight: 'bold',
						...classes.fontname,
					}}
				>
					AddProject
				</h1>
				<form
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						width: '100%',
						...classes.fontname,
					}}
					onSubmit={handleSubmit}
				>
					<TextField
						id="outlined-basic"
						label="Project Id"
						name="email"
						variant="outlined"
						type="tel"
						required
						value={project_id}
						onChange={(evt) => setProject_id(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Topic"
						name="email"
						variant="outlined"
						type="text"
						required
						value={topic}
						onChange={(evt) => setTopic(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Description"
						name="email"
						variant="outlined"
						type="text"
						required
						value={description}
						onChange={(evt) => setDescription(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<button style={classes.button} className="defaultButtonHover1">
						AddProject
					</button>
					<br />
				</form>
				<div style={{ color: 'red' }}>{err}</div>
			</div>
		</div>
	);
};

export default AddProject;
