import AdminScreen from './screens/admin';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Register from './screens/Register';
import Check from './screens/Check';
import InternScreen from './screens/Intern';
import EmployeeScreen from './screens/Employee';
import AddIntern from './screens/admin/AddIntern';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Check />,
	},
	{
		path: '/signin',
		element: <SignIn />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
	{
		path: '/profile',
		element: <Register />,
	},
	{
		path: '/admin',
		element: <AdminScreen />,
	},
	{
		path: '/intern',
		element: <InternScreen />,
	},
	{
		path: '/employee',
		element: <EmployeeScreen />,
	},
	{
		path: '/add-intern',
		element: <AddIntern />,
	},
]);
function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
			{/* <AdminScreen /> */}
		</div>
	);
}

export default App;
