import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
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
const AssignInternForm = () => {
	const [email, setEmail] = useState('');
	const [stipend, setStipend] = useState(0);
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [mentor, setMentor] = useState('');
	const [allMentors, setAllMentors] = useState([]);
	// ! fetch alllist of mentors
	useEffect(() => {
		var url = new URL(window.location.href);
		setEmail(url.searchParams.get('id'));
		var config = {
			method: 'get',
			url: `${host.host}/employee`,
			headers: {
				Credentials: `Bearer ${window.localStorage.getItem('dbisToken')}`,
			},
		};
		var axios = require('axios');
		axios(config)
			.then((res) => {
				setAllMentors(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		var dataIntern = {
			email_id: email,
			stipend: parseInt(stipend),
			start_date: startDate,
			expected_end_date: endDate,
		};
		var mentor_data = {
			mentor_id: mentor,
			intern_id: email,
		};
		var configIntern = {
			method: 'post',
			url: `${host.host}/intern`,
			data: dataIntern,
			headers: {
				Credentials: `Bearer ${localStorage.getItem('dbisToken')}`,
			},
		};
		var configMentor = {
			method: 'post',
			url: `${host.host}/mentor`,
			data: mentor_data,
			headers: {
				Credentials: `Bearer ${localStorage.getItem('dbisToken')}`,
			},
		};
		console.log(configIntern);
		axios(configIntern)
			.then((res) => {
				console.log('internsuccess');
				if (res.status === 200) {
					axios(configMentor)
						.then((response) => {
							console.log('mentorsuccess');
							console.log(response);
						})
						.catch((err) => console.log(err));
				}
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
					AssignInternForm
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
					<TextField
						id="outlined-basic"
						label="Start Date"
						name="stdate"
						variant="outlined"
						type="date"
						required
						value={startDate}
						onChange={(evt) => setStartDate(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="End Date"
						name="endate"
						variant="outlined"
						type="date"
						required
						value={endDate}
						onChange={(evt) => setEndDate(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<InputLabel id="input-appliedfor">Applied for</InputLabel>
					<Select
						labelId="input-appliedfor"
						id="demoinput-simple-select"
						value={mentor}
						required
						onChange={(evt) => setMentor(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					>
						{/* <MenuItem value={'intern'}>Intern</MenuItem>
              <MenuItem value={'employee'}>Employee</MenuItem>
              <MenuItem value={'others'}>Others</MenuItem> */}
						{allMentors.map((el, ind) => (
							<MenuItem value={el.email_id}>{el.email_id}</MenuItem>
						))}
					</Select>
					<br />
					<button style={classes.button} className="defaultButtonHover1">
						AssignInternForm
					</button>
					<br />
				</form>
			</div>
		</div>
	);
};

export default AssignInternForm;
