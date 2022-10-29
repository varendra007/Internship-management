import React, { useEffect, useState } from 'react';
import '../../App.css';
import buttons from '../../component/buttons';
import host from '../../data/host';

// var projects = [];
const GetProjects = () => {
	const [projects, setprojects] = useState([]);
	useEffect(() => {
		var axios = require('axios');
		var config = {
			method: 'get',
			url: `${host.host}/project`,
			headers: {
				Credentials: `Bearer ${window.localStorage.getItem('dbisToken')}`,
			},
		};

		axios(config)
			.then((res) => {
				setprojects(() => res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div style={{ width: '100vw', overflow: 'hidden' }}>
			<div
				id="tableLandlord"
				className="w-full overflow-auto"
				style={{ width: '100vw', overflow: 'auto' }}
			>
				{projects.length > 0 && (
					<table
						className="overflow-scroll"
						style={{ width: '100%', textAlign: 'center' }}
					>
						<thead>
							<tr>
								<th className="thx">Project Id</th>
								<th className="thx">Topic</th>
								<th className="thx">Description</th>
								<th className="thx">Assign Intern</th>
								{/* <th className="thx">Delete</th> */}
							</tr>
						</thead>
						<tbody>
							{projects.map((el, ind) => {
								return (
									<tr key={el.project_id}>
										<td className="tdx">{el.project_id}</td>
										<td className="tdx">{el.topic}</td>
										<td className="tdx">{el.description}</td>
										<td className="tdx">
											<button
												style={buttons.button}
												className="defaultButtonHover1"
												onClick={() => {
													window.location.href = `/view-project-interns?id=${el.project_id}`;
												}}
											>
												View Interns
											</button>
										</td>
										{/* <td className="tdx">
											<button className="defaultButtonHover1">Delete</button>
										</td> */}
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

export default GetProjects;
