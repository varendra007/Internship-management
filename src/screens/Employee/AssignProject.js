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
const AssignProject = () => {
	const [project_id, setProject_id] = useState('');
	const [intern_id, setInternId] = useState('');
	const [assigned_date, setAssignedDate] = useState('');
	const [end_date, setEndDate] = useState('');
	const [err, setErr] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			project_id,
			intern_id,
			assigned_date,
			end_date,
		};
		for (const key in data) {
			if (data[key] === '') {
				delete data[key];
			}
		}
		var axios = require('axios');
		var config = {
			method: 'post',
			url: `${host.host}/assign-project`,
			data: data,
			headers: {
				Credentials: `Bearer ${localStorage.getItem('dbisToken')}`,
			},
		};
		console.log(config);
		axios(config)
			.then(function (response) {
				if (response.status === 200) {
					console.log('success');
				}
				setErr('');
				console.log(JSON.stringify(response.data));
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
					AssignProject
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
						label="Intern Id"
						name="email"
						variant="outlined"
						type="text"
						required
						value={intern_id}
						onChange={(evt) => setInternId(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Assigned Date"
						name="email"
						variant="outlined"
						type="date"
						required
						value={assigned_date}
						onChange={(evt) => setAssignedDate(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Assigned Date"
						name="email"
						variant="outlined"
						type="date"
						required
						value={end_date}
						onChange={(evt) => setEndDate(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<button style={classes.button} className="defaultButtonHover1">
						AssignProject
					</button>
					<br />
				</form>
				<div style={{ color: 'red' }}>{err}</div>
			</div>
		</div>
	);
};

export default AssignProject;
