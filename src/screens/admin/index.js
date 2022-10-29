import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import host from '../../data/host';

var actions = [
	{
		title: 'Add Intern',
		description: 'Add Intern',
		href: '/add-intern',
	},
	{
		title: 'Add Employee',
		description: 'Add Employee',
		href: '/add-employee',
	},
	{
		title: 'View Interns',
		description: 'View Interns',
		href: '/get-interns',
	},
	{
		title: 'View Employee',
		description: 'View Employee',
		href: '/get-employee',
	},
	{
		title: 'Add Project',
		description: 'Add Project',
		href: '/add-project',
	},
	{
		title: 'All Mentors',
		description: 'All Mentors',
		href: '/all-mentor',
	},
	{
		title: 'Completed Inerns',
		description: 'All Mentors',
		href: '/completed-interns',
	},
];

const AdminScreen = () => {
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
			<Box
				sx={{ flexGrow: 1 }}
				direction="row"
				justifyContent="space-evenly"
				alignItems="center"
			>
				<Grid
					container
					// spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
					direction="row"
					justifyContent="space-evenly"
					alignItems="center"
					// columnSpacing={12}
				>
					{actions.map((el, index) => (
						<Grid
							item
							xs={6}
							sm={4}
							md={2}
							key={index}
							style={{
								height: '250px',
								background:
									'linear-gradient(to right, hsla(14, 93%, 53%, 1) 0%, #fa2d64  100%, #9bd9e8 100%) repeat scroll 0 0',
								margin: '10px',
								borderRadius: '12px',
								cursor: 'pointer',
								transform: 'revert-layer',
								color: 'white',
								display: 'flex',
								// justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
							onClick={() => {
								window.location.href = `${el.href}`;
							}}
						>
							<h2 style={{ color: '#751919', textDecoration: 'underline' }}>
								{el.title}
							</h2>
							<div style={{ width: '82%' }}>
								<p style={{ textAlign: 'center', fontSize: '21px' }}>
									{el.description}
								</p>
							</div>
						</Grid>
					))}
					<Grid
						item
						xs={6}
						sm={4}
						md={2}
						style={{
							height: '250px',
							background:
								'linear-gradient(to right, hsla(14, 93%, 53%, 1) 0%, #fa2d64  100%, #9bd9e8 100%) repeat scroll 0 0',
							margin: '10px',
							borderRadius: '12px',
							cursor: 'pointer',
							transform: 'revert-layer',
							color: 'white',
							display: 'flex',
							// justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
						onClick={() => {
							var axios = require('axios');
							var config = {
								method: 'delete',
								url: `${host.host}/profile`,
								headers: {
									Credentials: `Bearer ${window.localStorage.getItem(
										'dbisToken'
									)}`,
								},
							};
							axios(config)
								.then((res) => {
									console.log(res.data);
									window.location = '/signup';
								})
								.catch((err) => console.log(err));
						}}
					>
						<h2 style={{ color: '#751919', textDecoration: 'underline' }}>
							Delete Profile
						</h2>
						<div style={{ width: '82%' }}>
							<p style={{ textAlign: 'center', fontSize: '21px' }}>
								Delete Profile
							</p>
						</div>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default AdminScreen;
