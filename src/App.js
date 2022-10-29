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
import AddEmployee from './screens/admin/AddEmployee';
import AssignInternForm from './screens/admin/AssignInternForm';
import AssignEmployeeForm from './screens/admin/AssignEmployee';
import GetInterns from './screens/admin/GetInterns';
import GetEmployees from './screens/admin/GetEmployees';
import AddProject from './screens/Employee/AddProject';
import AssignProject from './screens/Employee/AssignProject';
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
	{
		path: '/add-employee',
		element: <AddEmployee />,
	},
	{
		path: '/assign-intern',
		element: <AssignInternForm />,
	},
	{
		path: '/assign-employee',
		element: <AssignEmployeeForm />,
	},
	{
		path: '/get-interns',
		element: <GetInterns />,
	},
	{
		path: '/get-interns',
		element: <GetInterns />,
	},
	{
		path: '/get-employee',
		element: <GetEmployees />,
	},
	{
		path: '/add-project',
		element: <AddProject />,
	},
	{
		path: '/assign-project',
		element: <AssignProject />,
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
