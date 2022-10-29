import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import host from '../data/host';
import getDataFromToken from '../utils/getDataFromJWT';
const classes = {
	button: {
		border: 'none',
		borderRadius: '100px',
		width: '200px',
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
	const [zipcode, setZipcode] = useState(null);
	const [country, setCountry] = useState('');
	const [gender, setGender] = useState('Male');
	const [university, setUniversity] = useState(0);
	const [pathToResume, setPathToResume] = useState(null);
	const [universityCity, setUniversityCity] = useState('');
	const [universityName, setUniversityName] = useState('');
	const [universityCountry, setUniversityCountry] = useState('');
	const [allUniversities, setAllUniversities] = useState([]);
	const [cpi, setCpi] = useState(null);
	const [passingYear, setPassingYear] = useState(null);
	const [err, setErr] = useState('');
	const [isSubmitPressed, setIsSubmitPressed] = useState(false);
	const [isUserFound, setIsUserFound] = useState(false);
	const [token, setToken] = useState(window.localStorage.getItem('dbisToken'));
	const [role, setRole] = useState(0);

	useEffect(() => {
		if (university === 0) {
			setErr('Please Enter your university details');
		} else {
			setErr('');
			setIsSubmitPressed(false);
		}
	}, [university]);
	useEffect(() => {
		// ! Checking if profile exists alredy

		var config = {
			method: 'get',
			url: `${host.host}/profile`,
			headers: {
				Credentials: `Bearer ${token}`,
			},
		};
		var axios = require('axios');
		axios(config)
			.then((res) => {
				console.log(JSON.stringify(res.data));
				if (res.status === 200) {
					setIsUserFound(true);
				} else {
					setIsUserFound(false);
				}
			})
			.catch((err) => {
				setIsUserFound(false);
			});
		// ! getting the list of all universities

		config = {
			method: 'get',
			url: `${host.host}/university`,
		};
		axios(config)
			.then((res) => {
				console.log(res.data);
				setAllUniversities(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		var user = getDataFromToken(token);
		console.log(user);
		if (user.role === null) {
			setRole(0);
		} else {
			setRole(user.role);
		}
		if (isUserFound) {
			if (role === 1) {
				window.location.href = '/admin';
			} else if (role === 2) {
				window.location.href = '/employee';
			} else if (role === 3) {
				window.location.href = '/intern';
			} else {
				window.location.href = '/';
			}
		}
	}, [isUserFound, token]);

	const handleSubmit = (e) => {
		setIsSubmitPressed(true);
		e.preventDefault();
		console.log('submit');
		var data = {
			first_name: firstName,
			middle_name: middleName,
			last_name: lastName,
			dob,
			address_first_line: addressFirstLine,
			address_second_line: addressSecondLine,
			zip_code: parseInt(zipcode),
			country,
			gender,
			university_id: university,
			university_name: universityName,
			uni_city: universityCity,
			uni_country: universityCountry,
			cpi: parseFloat(cpi),
			passing_year: parseInt(passingYear),
			phone: phone,
		};
		for (const key in data) {
			// console.log(data[key]);
			if (data[key] === '') {
				delete data[key];
			} else {
				console.log(key);
			}
		}
		var resume = {
			file: pathToResume,
		};
		if (err !== '') {
			return;
		}

		var axios = require('axios');

		var config = {
			method: 'post',
			data: data,
			url: `${host.host}/profile`,
			headers: {
				// 'Content-Type': 'multipart/form-data',
				Credentials: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF9pZCI6ImFkbWluQGNvbXBhbnkuY29tIiwiZXhwIjoxNjY3MDMwNDQ0LjB9.2dWqTH21sraayC8BPrMnIBWnduih9EHhcHn3Z65ZpwY`,
			},
		};
		console.log(config);

		axios(config)
			.then((res) => {
				// ! will upload resume
				if (res.status === 200) {
					config = {
						method: 'post',
						data: resume,
						url: `${host.host}/upload-resume`,
						headers: {
							'Content-Type': 'multipart/form-data',
							Credentials: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF9pZCI6ImFkbWluQGNvbXBhbnkuY29tIiwiZXhwIjoxNjY3MDMwNDQ0LjB9.2dWqTH21sraayC8BPrMnIBWnduih9EHhcHn3Z65ZpwY`,
						},
					};
					axios(config)
						.then((response) => {
							if (res.status === 200) {
								console.log(JSON.stringify(response.data));
							}
						})
						.catch((err) => {
							console.log(err);
							console.warn('File not uploaded');
						});
				}
			})
			.catch((err) => {
				console.log(err);
				console.warn('Profile not updated');
			});
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
					<>
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
						<TextField
							id="outlined-basic"
							label="CPI"
							name="cpi"
							variant="outlined"
							type="number"
							required
							value={cpi}
							onChange={(evt) => setCpi(evt.target.value)}
							style={{ width: '80%', ...classes.fontname }}
						/>
						<br />
						<TextField
							id="outlined-basic"
							label="Passing Year"
							name="year"
							variant="outlined"
							type="number"
							required
							value={passingYear}
							onChange={(evt) => setPassingYear(evt.target.value)}
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
							// value={pathToResume}
							onChange={(evt) => {
								var [file] = evt.target.files;
								setPathToResume(file);
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
							<MenuItem value={'male'}>Male</MenuItem>
							<MenuItem value={'female'}>Female</MenuItem>
							<MenuItem value={'others'}>Others</MenuItem>
						</Select>
						<br />
					</>
					<InputLabel id="input-university">University</InputLabel>
					<Select
						labelId="input-university"
						id="demo-simple-select"
						value={university}
						// label="Gender"
						onChange={(evt) => setUniversity(evt.target.value)}
						style={{ width: '80%', ...classes.fontname }}
					>
						{allUniversities.map((el, ind) => (
							<MenuItem value={el.id}>{el.name}</MenuItem>
						))}
					</Select>
					{university === 1 && (
						<>
							<br />
							<TextField
								id="outlined-basic"
								label="Name of University"
								name="university"
								variant="outlined"
								type="text"
								required
								value={universityName}
								onChange={(evt) => setUniversityName(evt.target.value)}
								style={{ width: '80%', ...classes.fontname }}
							/>
							<br />
							<TextField
								id="outlined-basic"
								label="City of University"
								name="universityCity"
								variant="outlined"
								type="text"
								required
								value={universityCity}
								onChange={(evt) => setUniversityCity(evt.target.value)}
								style={{ width: '80%', ...classes.fontname }}
							/>
							<br />
							<TextField
								id="outlined-basic"
								label="University country"
								name="uniCountry"
								variant="outlined"
								type="text"
								required
								value={universityCountry}
								onChange={(evt) => setUniversityCountry(evt.target.value)}
								style={{ width: '80%', ...classes.fontname }}
							/>
						</>
					)}
					<br />

					<button style={classes.button} className="defaultButtonHover1">
						Create profile
					</button>
					<br />
				</form>
				{err && isSubmitPressed && <div style={{ color: 'red' }}> {err}</div>}
			</div>
		</div>
	);
};

export default Register;
