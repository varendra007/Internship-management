import React, { useEffect, useState } from 'react';
import '../../App.css';
import buttons from '../../component/buttons';
import host from '../../data/host';

// var users = [];
const AllMentorsWithStudents = () => {
	const [users, setUsers] = useState([]);

	const assignUser = () => {
		var axios = require('axios');
		var config = {
			method: 'get',
			url: `${host.host}/mentor`,
			headers: {
				Credentials: `Bearer ${window.localStorage.getItem('dbisToken')}`,
			},
		};

		axios(config)
			.then((res) => {
				setUsers(res.data);
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
								<th className="thx">Mentor Email</th>
								<th className="thx">Mentor Name </th>
								<th className="thx">Intern Email</th>
								<th className="thx">Intern Name</th>
								<th className="thx">Intern Contact</th>
							</tr>
						</thead>
						<tbody>
							{users.map((el, ind) => {
								return (
									<tr key={ind}>
										<td className="tdx">{el.mentor.email_id}</td>
										<td className="tdx">
											{el.mentor.first_name} {el.mentor.last_name}
										</td>
										<td className="tdx">{el.intern.email_id}</td>
										<td className="tdx">
											{el.intern.first_name} {el.intern.last_name}
										</td>
										<td className="tdx">{el.intern.phone}</td>
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

export default AllMentorsWithStudents;
