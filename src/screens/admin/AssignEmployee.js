import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import host from '../../data/host';
const classes = {
	button: {
		border: 'none',
		borderRadius: '100px',
		width: '250px',
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
const AssignEmployeeForm = () => {
	const [email, setEmail] = useState(
		new URL(window.location.href).searchParams.get('id')
	);
	const [stipend, setStipend] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		var data = {
			email_id: email,
			salary: parseInt(stipend),
		};

		var config = {
			method: 'post',
			url: `${host.host}/employee`,
			data: data,
			headers: {
				Credentials: `Bearer ${localStorage.getItem('dbisToken')}`,
			},
		};

		var axios = require('axios');
		axios(config)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
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
					AssignEmployeeForm
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
						label="Email"
						name="email"
						variant="outlined"
						type="email"
						required
						value={email}
						onChange={(evt) => setEmail(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Stipend"
						name="stipend"
						variant="outlined"
						type="number"
						required
						value={stipend}
						onChange={(evt) => setStipend(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<button style={classes.button} className="defaultButtonHover1">
						AssignEmployeeForm
					</button>
					<br />
				</form>
			</div>
		</div>
	);
};

export default AssignEmployeeForm;
