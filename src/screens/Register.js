import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import host from '../data/host';
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
const Register = () => {
	const [firstName, setFirstName] = useState('');
	const [middleName, setMiddleName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [dob, setDob] = useState('');
	const [addressFirstLine, setAddressFirstLine] = useState('');
	const [addressSecondLine, setAddressSecondLine] = useState('');
	const [zipcode, setZipcode] = useState('');
	const [country, setCountry] = useState('');
	const [gender, setGender] = useState('Male');
	const [pathToResume, setPathToResume] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div
			style={{
				// height: '100vh',
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
					width: '60vw',
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
					Complete profile details
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
						label="First Name"
						name="firstName"
						variant="outlined"
						type="text"
						required
						value={firstName}
						onChange={(evt) => setFirstName(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Middle Name"
						name="middleName"
						variant="outlined"
						type="text"
						required
						value={middleName}
						onChange={(evt) => setMiddleName(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Last Name"
						name="lastName"
						variant="outlined"
						type="text"
						required
						value={lastName}
						onChange={(evt) => setLastName(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Phone"
						name="phone"
						variant="outlined"
						type="number"
						required
						value={phone}
						onChange={(evt) => setPhone(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Address First Line"
						name="addressFirstLine"
						variant="outlined"
						type="text"
						required
						value={addressFirstLine}
						onChange={(evt) => setAddressFirstLine(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Address Second Line"
						name="addressSecondLine"
						variant="outlined"
						type="text"
						required
						value={addressSecondLine}
						onChange={(evt) => setAddressSecondLine(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Date Of Birth"
						name="dob"
						variant="outlined"
						type="date"
						required
						value={dob}
						onChange={(evt) => setDob(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Zipcode"
						name="zipcode"
						variant="outlined"
						type="number"
						required
						value={zipcode}
						onChange={(evt) => setZipcode(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Country"
						name="country"
						variant="outlined"
						type="text"
						required
						value={country}
						onChange={(evt) => setCountry(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<InputLabel id="input-path-to-resume">Resume</InputLabel>
					<TextField
						labelId="input-path-to-resume"
						id="outlined-basic"
						// label="Gender"
						name="firstName"
						variant="outlined"
						type="file"
						required
						value={pathToResume}
						onChange={(evt) => {
							setPathToResume(evt.target.value);
							console.log(pathToResume);
						}}
						style={{ width: '80%', ...classes.fontname }}
					/>
					<br />
					<InputLabel id="demo-simple-select-label">Gender</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={gender}
						// label="Gender"
						onChange={(evt) => setGender(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					>
						<MenuItem value={'Male'}>Male</MenuItem>
						<MenuItem value={'Female'}>Female</MenuItem>
						<MenuItem value={'Others'}>Others</MenuItem>
					</Select>
					<br />

					<br />
					<button style={classes.button} className="defaultButtonHover1">
						Create profile
					</button>
					<br />
				</form>
			</div>
		</div>
	);
};

export default Register;
