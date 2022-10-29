import jwt from 'jwt-decode';

const getDataFromToken = (token) => {
	const user = jwt(token);
	console.log(user);
	// console.log();
	var isExp = false;
	if (Math.round(Date.now() / 1000) > user.exp) {
		isExp = true;
	}
	return {
		role: user.role,
		email_id: user.email_id,
		isExp,
	};
};

export default getDataFromToken;
