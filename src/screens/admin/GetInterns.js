import React, { useEffect, useState } from 'react';
import '../../App.css';
import buttons from '../../component/buttons';
import host from '../../data/host';

// var users = [];
const GetInterns = () => {
	const [users, setUsers] = useState([]);
	const assignUser = () => {
		var axios = require('axios');
		var config = {
			method: 'get',
			url: `${host.host}/intern`,
			headers: {
				Credentials: `Bearer ${window.localStorage.getItem('dbisToken')}`,
			},
		};

		axios(config)
			.then((res) => {
				setUsers(() => res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		assignUser();
	}, []);
	return (
		<div style={{ width: '100vw', overflow: 'hidden' }}>
			<div
				id="tableLandlord"
				className="w-full overflow-auto"
				style={{ width: '100vw', overflow: 'auto' }}
			>
				{users.length > 0 && (
					<table
						className="overflow-scroll"
						style={{ width: '100%', textAlign: 'center' }}
					>
						<thead>
							<tr>
								<th className="thx">First Name</th>
								<th className="thx">Last Name</th>
								<th className="thx">Phone number</th>
								<th className="thx">Email Id</th>
								<th className="thx">Assign Intern</th>
								<th className="thx">Delete</th>
							</tr>
						</thead>
						<tbody>
							{users.map((el, ind) => {
								return (
									<tr key={el.details.phone}>
										<td className="tdx">{el.details.first_name}</td>
										<td className="tdx">{el.details.last_name}</td>
										<td className="tdx">{el.details.phone}</td>
										<td className="tdx">{el.email_id}</td>
										<td className="tdx">
											<button
												style={buttons.button}
												className="defaultButtonHover1"
												onClick={() => {
													window.location.href = `/assign-intern?id=${el.email_id}`;
												}}
											>
												Assign {el.first_name}
											</button>
										</td>
										<td className="tdx">
											<button
												style={buttons.button}
												className="defaultButtonHover1"
												onClick={() => {
													var axios = require('axios');
													var config = {
														method: 'delete',
														url: `${host.host}/intern?email_id=${el.email_id}`,

														headers: {
															Credentials: `Bearer ${window.localStorage.getItem(
																'dbisToken'
															)}`,
														},
													};
													axios(config)
														.then((res) => {
															console.log(res.data);
															assignUser();
														})
														.catch((err) => console.log(err));
												}}
											>
												Delete
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default GetInterns;
