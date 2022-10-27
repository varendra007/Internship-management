import logo from './logo.svg';
import AdminScreen from './screens/admin';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

const router = createBrowserRouter([
	{
		path: '/',
		element: <SignUp />,
	},
	{
		path: '/signin',
		element: <SignIn />,
	},
	{
		path: '/signup',
		element: <SignUp />,
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
